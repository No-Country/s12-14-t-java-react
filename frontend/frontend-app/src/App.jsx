import { Provider } from "react-redux";
import { AppRouter } from "./router/AppRouter";
import { store } from "./store/store";
import { HashRouter } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <HashRouter >
          <AppRouter />
        </HashRouter>
      </Provider>
    </>
  );
};