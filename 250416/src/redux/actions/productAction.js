// import { productActions } from "../reducers/productReducer";

// const getProduct = (searchQuery) => {
//   // 여기서 리턴해줬기때문에 미들웨어에서쓸수있음
//   return async (dispatch) => {
//     const url = `https://my-json-server.typicode.com/Divjason/reactshop/products?q=${searchQuery}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     dispatch(productActions.getAllProducts({ data }));
//   };
// };

// export const productAtion = { getProduct };
