import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";

import "./Router.css";

import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Policy from "../Pages/Policy/Policy";
import TOS from "../Pages/TOS/TOS";
import Header from "../Components/Header/Header";
import FAQ from "../Pages/FAQ/FAQ";
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
  padding-top: 6rem;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    padding-top: 5rem;
  }

  @media (min-width: 992px) {
  }

  @media (min-width: 1200px) {
    padding-top: 4rem;
  }

  @media (min-width: 1824px) {
  }
`;

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopContainer = withRouter(ScrollToTop);

const PageRouter = () => (
  <Router>
    <ScrollToTopContainer>
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
                    <Route exact path="/privacy-policy" component={Policy} />
                    <Route exact path="/tos" component={TOS} />
                    <Route exact path="/terms" component={TOS} />
                    <Route exact path="/faqs" component={FAQ} />

                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <Footer />
            </Content>
          </Fill>
        )}
      />
    </ScrollToTopContainer>
  </Router>
);

export default PageRouter;
