import PropTypes from 'prop-types';
import React from 'react';
import Spinner from 'spin.js';

export default class ReactSpinner extends React.Component {
  static propTypes = {
    // This object is passed in wholesale as the spinner config
    config: PropTypes.object,
    // This is a quick way to overwrite just the color on the config
    color: PropTypes.string.isRequired,
  }
  static defaultProps = {
    config: {},
    color: 'black',
  }
  componentDidMount() {
    const {color, config} = this.props;
    const spinConfig = {
      // a few sensible defaults
      width: 2,
      radius: 10,
      length: 7,
      // color should not overwrite config
      color,
      // config will overwrite anything else
      ...config,
    };

    this.spinner = new Spinner(spinConfig);
    this.spinner.spin(this.refs.container);
  }
  componentWillUnmount() {
    this.spinner.stop();
  }
  render() {
    return <span ref="container"/>;
  }
}
