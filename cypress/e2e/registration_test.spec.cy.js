import { HomePage } from '../src/pages/home/home_page';
import { LoginPage } from '../src/pages/login/login_page';
import { RegistrationPage } from '../src/pages/registration/registration_page'

Cypress.on('uncaught:exception', (err) => {
    return false
})

describe('Registartion process', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const registrationPage = new RegistrationPage();

    beforeEach(() => {
        homePage.goToPage();
        homePage.clickOnMyAccountBtn();
        loginPage.clickOnRegisterNow();
    })

    it('Verify registration successful with valid data', () => {
        cy.fixture('registration_valid_data.json').then((data) => {
            registrationPage.verifyPath("/en/CustomerRegistration");
            registrationPage.register(data.title, data.firstName, data.lastName, data.email, 
                data.password, data.phoneNumber, data.apartment, data.street, data.town, data.state, data.zip);
            registrationPage.verifyRegisterSuccess();
        })
    })

    it('Verify registration failed with invalid firstName', () => {
        cy.fixture('registration_invalid_firstname.json').then((data) => {
            const arr = data.arr;
            arr.forEach((el) => {
                cy.reload();
                registrationPage.register(el.title, el.firstName, el.lastName, el.email,
                    el.password, el.phoneNumber, el.apartment, el.street, el.town, el.state, el.zip);
                registrationPage.verifyFirstNameError(el.expectedResult);
            })
        })
    })

    it('Verify registration failed with invalid lastName', () => {
        cy.fixture('registration_invalid_lastname.json').then((data) => {
            const arr = data.arr;
            arr.forEach((el) => {
                cy.reload();
                registrationPage.register(el.title, el.firstName, el.lastName, el.email,
                    el.password, el.phoneNumber, el.apartment, el.street, el.town, el.state, el.zip);
                registrationPage.verifyLastNameError(el.expectedResult);
            })
        })
    })

    it('Verify registration failed with invalid email', () => {
        cy.fixture('registration_invalid_email.json').then((data) => {
            const arr = data.arr;
            arr.forEach((el) => {
                cy.reload();
                registrationPage.register(el.title, el.firstName, el.lastName, el.email,
                    el.password, el.phoneNumber, el.apartment, el.street, el.town, el.state, el.zip);
                registrationPage.verifyEmailError(el.expectedResult);
            })
        })
    })

    it('Verify registration failed with invalid password', () => {
        cy.fixture('registration_invalid_password.json').then((data) => {
            const arr = data.arr;
            arr.forEach((el) => {
                cy.reload();
                registrationPage.register(el.title, el.firstName, el.lastName, el.email,
                    el.password, el.phoneNumber, el.apartment, el.street, el.town, el.state, el.zip);
                registrationPage.verifyPasswordError(el.expectedResult);
            })
        })
    })

    it('Verify registration failed with invalid phone number', () => {
        cy.fixture('registration_invalid_phonenumber.json').then((data) => {
            const arr = data.arr;
            arr.forEach((el) => {
                cy.reload();
                registrationPage.register(el.title, el.firstName, el.lastName, el.email,
                    el.password, el.phoneNumber, el.apartment, el.street, el.town, el.state, el.zip);
                registrationPage.verifyPhoneNumberError(el.expectedResult);
            })
        })
    })
})
