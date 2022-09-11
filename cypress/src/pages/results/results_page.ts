import { BasePage } from '../base_page';
import { resultsPageLocators } from './results_locators';

export class ResultsPage extends BasePage {
    constructor() {
        super();
    }

    verifyPlpResult(str: string) {
        cy.get(resultsPageLocators.plpResult).should(($div) => {
            expect($div.text().toLowerCase()).contain(str);
        });
        cy.screenshot();
    }

    verifyPlpCountResults(min: number) {
        cy.get(resultsPageLocators.plpCountResults).invoke('text')
            .then(parseInt).should("be.gte", min);
        cy.screenshot();
    }

    verifyFirstResultName(str: string) {
        cy.get(resultsPageLocators.firstResult).should(($div) => {
            expect($div.text().toLowerCase()).contain(str);
        });
        cy.screenshot();
    }

    verifySecondResultName(str: string) {
        cy.get(resultsPageLocators.secondResult).should(($div) => {
            expect($div.text().toLowerCase()).contain(str);
        });
        cy.screenshot();
    }

    clickOnFirstResult() {
        cy.get(resultsPageLocators.firstResult).click();
    }

    clickOnSecondResult() {
        cy.get(resultsPageLocators.secondResult).click();
    }
}