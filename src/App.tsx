import React, { Suspense } from "react";
import "./App.scss";
import { Route, Switch } from "react-router";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";

const NotFound = React.lazy(() => import('./pages/error/error'));
const Home = React.lazy(() => import('./pages/home/home'));
const How = React.lazy(() => import('./pages/how/how'));
const Login = React.lazy(() => import('./pages/login/login'));
const Search = React.lazy(() => import('./pages/search/search'));
const Trial = React.lazy(() => import('./pages/trial/trial'));

const App: React.FC = () => (
  <>
    <Menu />
    <Switch>
      <Route path="/" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </Route>
      <Route path="/how-it-works" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <How />
        </Suspense>
      </Route>
      <Route path="/login" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </Route>
      <Route path="/search" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <Search />
        </Suspense>
      </Route>
      <Route path="/trials" exact >
        <Suspense fallback={<div>Loading...</div>}>
          <Trial />
        </Suspense>
      </Route>
      <Route path="*">
        <Suspense fallback={<div>Loading...</div>}>
          <NotFound />
        </Suspense>
      </Route>
    </Switch>

    <Footer />
  </>
);
export default App;
