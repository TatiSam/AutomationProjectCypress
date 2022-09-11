import { BasePage } from '../base_page';
import { productPageLocators } from './product_locators';

export class ProductPage extends BasePage {
    constructor() {
        super();
    }

    putProductToShoppingCart(){
        this.chooseSize();
        cy.get(productPageLocators.addToBagBtn).first().click();
    }

    goToShoppingCart(){
        cy.get(productPageLocators.shoppingBagBtn).click();
        cy.get(productPageLocators.viewBagBtn).click();
    }

    chooseSize(){
        cy.get(productPageLocators.chooseSize).first().click({force: true});
        cy.get(productPageLocators.firstSize).first().click({force: true});
    }
}