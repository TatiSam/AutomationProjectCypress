import { BasePage } from '../base_page';
import { homePageLocators } from './home_locators';

export class HomePage extends BasePage {
    constructor() {
        super();
    }

    searchTerm(term: string) {
        cy.get(homePageLocators.searchBox).type(term);
        cy.get(homePageLocators.searchBtn).click();
    }

    clickOnMyAccountBtn() {
        cy.get(homePageLocators.myAccountBtn).click({force: true});
    }
}