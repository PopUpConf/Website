import React, { Component } from 'react';
import Helmet from 'react-helmet';
import SVGInline from 'react-svg-inline';
import queryString from 'query-string';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import Logo from '!raw-loader!../assets/PopUpConf_Logo.svg';
import OpenGraphImage from '../assets/PopUpConf_OpenGraph.png';
import TwitterImage from '../assets/PopUpConf_Twitter.png';

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
          meta={[
            { name: 'description', content: config.siteDescription },
            { name: 'keywords', content: config.siteKeywords.join() },
            { name: 'og:title', content: config.siteSummary },
            { name: 'og:description', content: config.siteDescription },
            { name: 'og:type', content: 'website' },
            { name: 'og:image', content: `http://${config.siteHost}${prefixLink(OpenGraphImage)}` },
            { name: 'og:url', content: `http://${config.siteHost}/` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: config.siteSummary },
            { name: 'twitter:description', content: config.siteDescription },
            { name: 'twitter:image', content: `http://${config.siteHost}${prefixLink(TwitterImage)}` },
          ]}
        />
        { toast ? <div className="toast toast-floating abs">{toast} </div> : null }
        <div className="hero">
          <h1 className="brand">
            <SVGInline svg={Logo} /><br />
          </h1>
          <h3>
            September 13<sup>th</sup>, 2017
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

