
export const addCart = (product) => {
  return{
    type: "ADDITEM",
    payload:product
  }
}

export const DELITEM = (product) => {
  return{
    type: "DELITEM",
    payload:product
  }
}