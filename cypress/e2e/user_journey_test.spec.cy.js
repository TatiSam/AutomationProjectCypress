import { HomePage } from '../src/pages/home/home_page';
import { LoginPage } from '../src/pages/login/login_page';
import { ProductPage } from '../src/pages/product/product_page';
import { ResultsPage } from '../src/pages/results/results_page';
import { ShoppingCartPage } from '../src/pages/shopping_cart/shopping_cart_page';

Cypress.on('uncaught:exception', (err) => {
    return false;
})

describe('User journey', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const resultsPage = new ResultsPage();
    const productPage = new ProductPage();
    const shoppingCartPage = new ShoppingCartPage();

    it('Verfy login success with valid data', () => {
        homePage.goToPage();
        homePage.clickOnMyAccountBtn();
        loginPage.verifyPath("/en/Login");
        loginPage.login("tanicknom@gmail.com", "Y348d76Rt");
        loginPage.verifyLoginSuccess();
    })

    it('Verify search process', () => {
        homePage.goToPage();
        cy.fixture('search_term.json').then((data) => {
            const term = data.terms[0];
            homePage.searchTerm(term);
            resultsPage.verifyPath("/en/search");
            resultsPage.verifyFirstResultName(term);
            resultsPage.verifySecondResultName(term);
        })
    })

    it('Verify shopping cart', () => {
        resultsPage.clickOnFirstResult();
        productPage.putProductToShoppingCart();
        productPage.goToShoppingCart();
        shoppingCartPage.verifyPath("/en/shoppingbag");
        shoppingCartPage.verifyMessageContains("1 item");
        shoppingCartPage.changeQuantityOfProducts();
        shoppingCartPage.verifyMessageContains("2 item");
        shoppingCartPage.removeFirstProduct();
        shoppingCartPage.verifyMessageContains("0 item");
    })
})
