export interface resultsPageLocatorsInterface {
    'firstResult': string,
    'secondResult': string,
    'plpResult': string,
    'plpCountResults': string
}

export const resultsPageLocators: resultsPageLocatorsInterface = {
    'firstResult': '[data-testid="plp-product-grid-item"]:first-child h2 a',
    'secondResult': '[data-testid="plp-product-grid-item"]:nth-child(2) h2 a',
    'plpResult': '[id="plp-results-title-container"] h1 span:first-child',
    'plpCountResults': '[role="status"]'
}