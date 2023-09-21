import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

import MainScreen from "./components/MainScreen";
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";

// Creating the Redux store with configureStore
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/modalA" element={<ModalA/>} />
          <Route path="/modalB" element={<ModalB/>} />
        </Routes>
      </div>
    </Provider>
  );
};

export default App;
