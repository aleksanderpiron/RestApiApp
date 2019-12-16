import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedSwitch = ({ animationClassName, animationTimeout, children }) => (
  <Route render={({ location }) => (
    <TransitionGroup style={{
      flex: 1,
      position: 'relative',
    }}>
      <CSSTransition
        key={location.key}
        timeout={animationTimeout}
        classNames={animationClassName}
      >
        <Switch location={location}>
          {children}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )} />
);
const AnimatedRoute = (props) => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}>
    <Route {...props} />
  </div>
);
export {
  AnimatedSwitch,
  AnimatedRoute
};