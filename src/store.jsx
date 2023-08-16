import { configureStore } from "@reduxjs/toolkit";
import basketTool from "./redux/basketTool";

const store = configureStore({
    reducer:{
        user:basketTool
    }
})

export default store;