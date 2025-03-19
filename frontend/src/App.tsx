import React from "react";
import { Provider } from "react-redux";
import SignupForm from "./components/SignupForm";
import store from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyles />
        <SignupForm />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
