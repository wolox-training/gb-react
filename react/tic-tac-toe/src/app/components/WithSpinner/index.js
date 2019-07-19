import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';

function withSpinner(WrappedComponent) {
  function LoadingComponent({ loading, ...props }) {
    return loading ? <Spinner name="circle" /> : <WrappedComponent {...props} />;
  }

  LoadingComponent.propTypes = {
    loading: PropTypes.bool
  };

  return LoadingComponent;
}

withSpinner.propTypes = {
  props: PropTypes.shape({ loading: PropTypes.bool })
};

export default withSpinner;
