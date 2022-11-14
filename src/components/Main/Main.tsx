import React, {FC} from 'react';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';

import {Stats} from '../Stats/Stats';
import {Tasks} from '../Tasks/Tasks';
import {Settings} from '../Settings/Settings';
import {Others} from '../Others/Others';
import {navlinks} from './navlinks';
import './main.css';

export const Main: FC = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <nav>
          {navlinks.map(({link, name}) => {
            return (
              <div className="main__nav_link" key={name}>
                <NavLink
                  className="main__nav_link_currentLink"
                  activeClassName="main__nav_link_currentLink_active"
                  to={link}
                  exact
                >
                  {name}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <Route path="/" exact>
          <Tasks />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
        <Route path="/others">
          <Others />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </div>
    </BrowserRouter>
  );
}
