import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { ThemeProvider } from './context/themeContext';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/projects',
    component: Projects,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
].map(({ path, component: Component, exact }) => (
  <Route path={path} key={path} exact={exact}>
    <Component />
  </Route>
));
function App() {
  return (
    <div className="font-inter">
      <ThemeProvider>
        <Background>
          <Router>
            <ScrollToTop>
              <Switch>
                {routes}
                <Redirect to="/" />
              </Switch>
            </ScrollToTop>
          </Router>
        </Background>
      </ThemeProvider>
    </div>
  );
}

export default App;
