export interface shoppingCartPageLocatorsInterface {
    'price': string,
    'quantity': string,
    'changeQuantity': string,
    'total': string,
    'remove': string,
    'message': string
}

export const shoppingCartPageLocators: shoppingCartPageLocatorsInterface = {
    'price': 'p[class="price"]',
    'quantity': 'td[class="qtyColumn"] a',
    'changeQuantity': '[class="qtyColumn"] ul li:nth-child(2) a',
    'total': '[id="sbtotals"]',
    'remove': 'a[title="Click to remove this item"]',
    'message': '[id="title"] p'
}