import { HomePage } from '../src/pages/home/home_page';
import { ResultsPage } from '../src/pages/results/results_page';

Cypress.on('uncaught:exception', (err) => {
    return false
})

describe('Search a term', () => {
    const homePage = new HomePage();
    const resultsPage = new ResultsPage();

    beforeEach(() => {
        homePage.goToPage();
    })

    it('Verify search process', () => {
        cy.fixture('search_term.json').then((data) => {
            const terms = data.terms;
            terms.forEach((term) => {
                homePage.searchTerm(term);
                resultsPage.verifyPath("/en/search");
                resultsPage.verifyPlpResult(term);
                // resultsPage.verifyPlpCountResults(1);
                // resultsPage.verifyFirstResultName(term);
                // resultsPage.verifySecondResultName(term);
            })
        })
    })
})
