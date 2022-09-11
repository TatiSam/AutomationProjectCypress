export class BasePage {
    private pageUrlPath: string;
    private fullUrl: string;

    constructor(pageUrlPath: string = "") {
        this.pageUrlPath = pageUrlPath;
        this.fullUrl = Cypress.config().baseUrl + pageUrlPath;
    }

    goToPage() {
        cy.visit(this.fullUrl);
    }

    goBack(){
        cy.go('back');
    }

    verifyPath(str: string){
        cy.location("pathname").should("eq", str);
    }
}