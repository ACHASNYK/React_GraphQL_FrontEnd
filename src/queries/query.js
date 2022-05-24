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
    name
    products {
      name
      id
      inStock
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}
`
const allClothes = gql`
query Query3 {
  category(input: { title: "clothes" }) {
    name
    products {
      name
      id
      inStock
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
    }
  }
}
`

const allTech = gql`
query Query4 {
  category(input: { title: "tech" }) {
    name
    products {
      name
      id
      inStock
      gallery
      prices {
        currency {
          symbol
        }
        amount
      }
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
const testQ = gql`
query Query($input: CategoryInput, $productId: String!) {
  category(input: $input) {
    name
  }
  product(id: $productId) {
    gallery
    name
  }
}
`

export {allCatQuery, allProducts, productById, testQ};