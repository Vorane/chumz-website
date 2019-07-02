import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from "styled-components";

import "./Router.css";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Policy from "../Pages/Policy/Policy";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Fill = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Content = styled(Fill)`
  text-align: center;
`;

const PageRouter = () => (
  <Router>
    <Route
      render={({ location }) => (
        <Fill>
          <Route exact path="/" render={() => <Redirect to="/home" />} />

          <Header />

          <Content>
            <TransitionGroup>
              {/* no different than other usage of
                CSSTransition, just make sure to pass
                `location` to `Switch` so it can match
                the old location as it animates out
            */}
              <CSSTransition
                key={location.key}
                classNames="fade2"
                timeout={300}
              >
                <Switch location={location}>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/contact" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/policy" component={Policy} />

                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
            <Footer />
          </Content>
        </Fill>
      )}
    />
  </Router>
);

export default PageRouter;
