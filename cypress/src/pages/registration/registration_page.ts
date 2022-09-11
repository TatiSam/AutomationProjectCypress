import { BasePage } from '../base_page';
import { registrationPageLocators } from './registration_locators';

export class RegistrationPage extends BasePage {
    constructor() {
        super();
    }

    register(title: string, firstName: string, lastName: string, email: string, password: string,
        phoneNumber: string, appartment: string, street: string, town: string, state: string, zip: string){
            cy.get(registrationPageLocators.titleSelect).select(title);
            cy.get(registrationPageLocators.firstName).type(firstName);
            cy.get(registrationPageLocators.lastName).type(lastName);
            cy.get(registrationPageLocators.email).type(email);
            cy.get(registrationPageLocators.password).type(password);
            cy.get(registrationPageLocators.phoneNumber).type(phoneNumber);
            cy.get(registrationPageLocators.apartment).type(appartment);
            cy.get(registrationPageLocators.street).type(street);
            cy.get(registrationPageLocators.town).type(town);
            cy.get(registrationPageLocators.stateSelect).select(state);
            cy.get(registrationPageLocators.zip).type(zip);
            cy.get(registrationPageLocators.signUpBtn).click();
    }

    verifyRegisterSuccess(){
        cy.get(registrationPageLocators.continueShoppingBtn).should("be.visible");
        cy.screenshot();
    }

    verifyFirstNameError(str: string){
        cy.get(registrationPageLocators.firstNameError).should("have.text", str);
        cy.screenshot();
    }

    verifyLastNameError(str: string){
        cy.get(registrationPageLocators.lastNameError).should("have.text", str);
        cy.screenshot();
    }

    verifyEmailError(str: string){
        cy.get(registrationPageLocators.emailError).should("have.text", str);
        cy.screenshot();
    }

    verifyPasswordError(str: string){
        cy.get(registrationPageLocators.passwordError).should("have.text", str);
        cy.screenshot();
    }

    verifyPhoneNumberError(str: string){
        cy.get(registrationPageLocators.phoneNumberError).should("have.text", str);
        cy.screenshot();
    }
}