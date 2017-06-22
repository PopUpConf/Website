import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import Helmet from 'react-helmet';
import queryString from 'query-string';
import { config } from 'config';

import Logo from '!raw-loader!../assets/PopUpConf_Logo.svg';

import SubscribeForm from '../components/common/SubscribeForm.js';

export default class IndexPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toast: '',
    };
  }

  componentWillMount() {
    if (typeof window === 'undefined') return;
    const query = queryString.parse(window.location.search);
    if (query.sub_confirm) this.setState({ toast: <span><i className="icon icon-check" /> Subscription confirmed</span> });
  }

  render() {
    const { toast } = this.state;
    return (
      <div className="home">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        { toast ? <div className="toast toast-floating abs">{toast} </div> : null }
        <div className="hero">
          <h1 className="brand">
            <SVGInline svg={Logo} /><br />
          </h1>
          <h3>
            September 17<sup>th</sup>, 2017
          </h3>
          <div className="cta">
            <p className="cta-call">Be the <b>first</b> to get access!</p>
            <SubscribeForm />
          </div>
        </div>
      </div>
    );
  }
}

