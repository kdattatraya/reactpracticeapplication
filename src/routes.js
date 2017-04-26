import React, {Propypes} from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Hello from './components/course/Hello';
import CoursePage from './components/course/CoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursePage} />
    <Route path="welcome" component={Hello} />
    <Route path="about" component={AboutPage} />
  </Route>
);