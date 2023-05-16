/**
 * Docs: https://graphcommerce.org/docs/framework/config
 *
 * @type {import('@graphcommerce/next-config/src/generated/config').GraphCommerceConfig}
 */
const config = {
  hygraphEndpoint: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhj3ql2o2fpw01t9ecsf42sk/master',
  magentoEndpoint: 'https://m2ce.smmage2.com/graphql',
  canonicalBaseUrl: 'https://graphcommerce.vercel.app',
  storefront: [{ locale: 'en', magentoStoreCode: 'en_US' }],
}

module.exports = config
