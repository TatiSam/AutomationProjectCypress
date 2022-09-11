export interface homePageLocatorsInterface {
    'searchBox': string,
    'searchBtn': string,
    'shoppingBagBtn': string,
    'viewBagBtn': string,
    'myAccountBtn': string,
    'navBarGirlsLink': string,
    'navBarJeansLink': string
}

export const homePageLocators: homePageLocatorsInterface = {
    'searchBox': '[id="header-search-form"] input',
    'searchBtn': '[id="header-search-form"] button',
    'shoppingBagBtn': 'button[data-ga-v2="Shopping bag"]',
    'viewBagBtn': '[data-ga-v3="View Bag"]',
    'myAccountBtn': '[data-testid="header-adaptive-my-account-icon-container-link"]',
    'navBarGirlsLink': '[title="GIRLS"]',
    'navBarJeansLink': '[title=\"Jeans\"]'
}