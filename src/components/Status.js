import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  static propTypes = {
    message: PropTypes.string
  }

  render() {
    return (
      <section>
        {this.props.message}
      </section>
    );
  }
}

export default Status;
