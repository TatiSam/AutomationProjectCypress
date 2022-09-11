export interface loginPageLocatorsInterface {
    'email': string,
    'password': string,
    'signInBtn': string,
    'continueShoppingBtn': string,
    'registerNowBtn': string
}

export const loginPageLocators: loginPageLocatorsInterface = {
    'email': '[id="EmailOrAccountNumber"]',
    'password': '[id="Password"]',
    'signInBtn': '[id="SignInNow"]',
    'continueShoppingBtn': 'div[class="error-description"] a[class="link-btn"]',
    'registerNowBtn': '[data-ga-guest-label="Sign-up-now"]'
}