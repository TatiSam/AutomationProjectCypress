export interface productPageLocatorsInterface {
    'chooseSize': string,
    'firstSize': string,
    'addToBagBtn': string,
    'viewBagBtn': string,
    'shoppingBagBtn': string,
    'itemNumber': string,
    'price': string
}

export const productPageLocators: productPageLocatorsInterface = {
    'chooseSize': 'div[class="DropDown"][style="display:block"] a',
    'firstSize': 'li[class="InStock"] a[class="dk_dropdown_option"]',
    'addToBagBtn': '[class="AddToBag"] a',
    'viewBagBtn': '[data-ga-v3="View Bag"]',
    'shoppingBagBtn': 'button[data-ga-v2="Shopping bag"]',
    'itemNumber': '[class="ItemNumber"]',
    'price': '[class="nowPrice"]>span'
}