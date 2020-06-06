import React, { Suspense } from "react";
import "./App.scss";
import { Route, Switch } from "react-router";
import { Footer } from "./components/footer/footer";
import Menu from "./components/menu/menu";
const NotFound = React.lazy(() => import('./pages/error/error'));
const Home = React.lazy(() => import('./pages/home/home'));

const App: React.FC = () => (
  <>
    <Menu />
    <Switch>
      <Route path="/home" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </Route>
      <Route path="*">
        <Suspense fallback={<div>Loading...</div>}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>

    <Footer description="Google" />
  </>
);
export default App;
