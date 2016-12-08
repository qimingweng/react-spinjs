import React, {PropTypes} from 'react';
import Spinner from 'spin.js';

export default class ReactSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.startSpinner = this.startSpinner.bind(this);
  }
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
  startSpinner({color, config}) {
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
  componentDidMount() {
    this.startSpinner(this.props);
  }
  componentWillReceiveProps(props) {
    if (props.color !== this.props.color || props.config !== this.props.config) {
      this.startSpinner(props);
    }
  }
  componentWillUnmount() {
    this.spinner.stop();
  }
  render() {
    return <span ref="container"/>;
  }
}
