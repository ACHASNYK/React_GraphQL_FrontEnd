import {gql} from '@apollo/client';

const allCatQuery = gql`
query Query {
  categories {
    name
  }
}
`

const allProducts = gql`
query Query2 ($input: CategoryInput) {
  category(input: $input) {
    __typename @skip(if: true)
    name
    products {
      __typename @skip(if: true)
      name
      id
      inStock
      gallery
      attributes {
        __typename @skip(if: true)
        id
        name
        type
        items {
          __typename @skip(if: true)
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          symbol
        }
        amount
      }
      brand
    }
  }
}
`




const productById = gql`
query Query5 ($productId: String!) {
  product(id: $productId) {
    id
    name
    inStock
    gallery
    description
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
}
`

const currency = gql`
query Query6 {
  currencies {
    label
    symbol
  }
}
`

export {allCatQuery, allProducts, productById, currency};