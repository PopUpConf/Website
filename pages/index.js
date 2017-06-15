import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';
import PageLink from '../components/common/PageLink';

class IndexPage extends Component {
  render () {
    return (
      <div className="home">
        <Helmet
          title={`${config.siteTitle} | Home`}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <div className="hero">
          <div>
            <h1>PopUpConf</h1>
            <div className="cta">
              <div className="input-group">
                <input type="text" className="form-input" placeholder="Enter your email" />
                <button className="btn btn-primary input-group-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndexPage;
