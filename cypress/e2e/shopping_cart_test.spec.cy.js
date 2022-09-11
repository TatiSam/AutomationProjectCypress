import { HomePage } from '../src/pages/home/home_page';
import { ProductPage } from '../src/pages/product/product_page';
import { ResultsPage } from '../src/pages/results/results_page';
import { ShoppingCartPage } from '../src/pages/shopping_cart/shopping_cart_page';

Cypress.on('uncaught:exception', (err) => {
    return false;
})

describe('Shopping cart', () => {
    const homePage = new HomePage();
    const resultsPage = new ResultsPage();
    const productPage = new ProductPage();
    const shoppingCartPage = new ShoppingCartPage();

    beforeEach(() => {
        homePage.goToPage();
        cy.fixture('search_term.json').then(data => {
            const searchTerm = data.terms[0];
            homePage.searchTerm(searchTerm);
            resultsPage.clickOnFirstResult();
            productPage.putProductToShoppingCart();
        })
    })

    it('Verify added product is in the shopping cart', () => {
        productPage.goToShoppingCart();
        shoppingCartPage.verifyPath("/en/shoppingbag");
        shoppingCartPage.verifyMessageContains("1 item");
        shoppingCartPage.removeFirstProduct();
    })

    it('Verify when product was added to the cart twice, the quantity in the cart is 2', () => {
        productPage.goBack();
        resultsPage.clickOnFirstResult();
        productPage.putProductToShoppingCart();
        productPage.goToShoppingCart();
        shoppingCartPage.verifyPath("/en/shoppingbag");
        shoppingCartPage.verifyMessageContains("2 items");
        shoppingCartPage.removeAllProducts();
    })

    it('Verify changing quantity of product in shopping cart', () => {
        productPage.goToShoppingCart();
        shoppingCartPage.verifyPath("/en/shoppingbag");
        shoppingCartPage.changeQuantityOfProducts();
        shoppingCartPage.verifyMessageContains("2 item");
        shoppingCartPage.removeFirstProduct();
    })

    it('Verify remove product from shopping cart', () => {
        productPage.goToShoppingCart();
        shoppingCartPage.verifyPath("/en/shoppingbag");
        shoppingCartPage.removeFirstProduct();
        shoppingCartPage.verifyMessageContains("0 item");
    })
})
