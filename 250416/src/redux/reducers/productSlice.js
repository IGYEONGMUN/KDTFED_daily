// 비동기처리 하는걸 크레이트 에이싱크성크가 할거임
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import reducers from ".";

let initialState = {
  productList: [],
  isLoading: false,
  error: null,
};

// 이런 비동기처리를하고싶음

export const patchProducts = createAsyncThunk(
  "product/fetchAll",
  // 프라미스 객체를 pending, fulfilled, and rejected 단계 나눠서 가능
  async (searchQuery, thunkApi) => {
    try {
      const url = `https://my-json-server.typicode.com/Divjason/reactshop/products?q=${searchQuery}`;
      const response = await fetch(url);
      const data = await response.json();
      return await response.json();
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getAllProducts(state, action) {
    //   state.productList = action.payload.data;
    // },
  },
  // return await response.json();이걸받음 / 반환값에 따라서pending, fulfilled, and rejected 상태를 알려줌
  extraReducers: (builder) => {
    builder
      .addCase(patchProducts.pending, (state) => {
        state.isLoading = true;
      })
      // 얘가 있으니까 reducers안에 값 필요없음
      .addCase(patchProducts.fulfilled, (state, action) => {
        state.productList = action.payload.data;
        state.isLoading = false;
      })
      .addCase(patchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

console.log("test : ", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
