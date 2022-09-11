import { BasePage } from '../base_page';
import { loginPageLocators } from './login_locators';

export class LoginPage extends BasePage {
    constructor() {
        super();
    }

    login(email: string, password: string){
        cy.get(loginPageLocators.email).type(email);
        cy.get(loginPageLocators.password).type(password);
        cy.get(loginPageLocators.signInBtn).click();
    }

    verifyLoginSuccess(){
        cy.get(loginPageLocators.continueShoppingBtn).should("be.visible");
        cy.screenshot();
    }

    verifyLoginFailed(){
        cy.get(loginPageLocators.continueShoppingBtn).should("be.visible");
        cy.screenshot();
    }

    clickOnRegisterNow(){
        cy.get(loginPageLocators.registerNowBtn).click();
    }
}