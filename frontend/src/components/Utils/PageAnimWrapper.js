import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageAnimWrapper = Page => {
    console.log(Page)
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName='page-switch'
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageAnimWrapper;
