import Header from "./components/Header/Header";
import { reset } from "./style/GlobalStyle";
import { Global } from "@emotion/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Introduction from "./components/Introduction/Introduction";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/introduction" component={Introduction} />
        <Route path="/projects" component={Shop} />
        <Route path="/contactus" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
