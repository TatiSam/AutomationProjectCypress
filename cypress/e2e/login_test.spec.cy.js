import { HomePage } from '../src/pages/home/home_page';
import { LoginPage } from '../src/pages/login/login_page';

Cypress.on('uncaught:exception', (err) => {
    return false
})

describe('Login process', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    beforeEach(() => {
        homePage.goToPage();
        homePage.clickOnMyAccountBtn();
    })

    it('Verfy login success with valid data', () => {
        loginPage.verifyPath("/en/Login");
        loginPage.login("tanicknom@gmail.com", "Y348d76Rt");
        loginPage.verifyLoginSuccess();
    })

    it('Verify login failed with invalid data', () => {
        loginPage.verifyPath("/en/Login");
        loginPage.login("tan@gmail.com", "Y3486Rt");
        loginPage.verifyLoginFailed();
    })
})
