import { CHANGE_QUERY_NAME } from "./constants"

export const setCategoryName = (text) => ({
    type: CHANGE_QUERY_NAME,
    payload: text
})