import { BasePage } from '../base_page';
import { shoppingCartPageLocators } from './shopping_cart_locators';

export class ShoppingCartPage extends BasePage {
    constructor() {
        super();
    }

    verifyMessageContains(message: string){
        cy.get(shoppingCartPageLocators.message).should(($div) => {
            expect($div.text().toLowerCase()).contain(message);
        });
        cy.screenshot();
    }

    changeQuantityOfProducts(){
        cy.get(shoppingCartPageLocators.changeQuantity).click({force: true});
    }

    removeFirstProduct(){
        cy.get(shoppingCartPageLocators.remove).first().click();
    }

    removeAllProducts(){
        cy.get(shoppingCartPageLocators.remove).click({ multiple: true });
    }
}