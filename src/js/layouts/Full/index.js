import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class Full extends Component {
  render() {
    const {
      props
    } = this;
    return (
      <div className="site">
        <Header {...props} />
        <Main {...props} />
        <Footer {...props} />
      </div>
    );
  }
}

export default Full;
