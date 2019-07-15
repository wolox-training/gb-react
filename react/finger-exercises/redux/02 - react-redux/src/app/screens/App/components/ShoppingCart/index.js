import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { arrayOf } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import Item from './components/Item';
import styles from './styles.scss';
import { ENETUNREACH } from 'constants';

class ShoppingCart extends PureComponent {
  state = {
    open: false
  };

  toggleContent = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  total = () => {
    const { bookSelected } = this.props;
    return bookSelected.reduce((accum, current) => accum + current.amount, 0);
  };

  renderItems = item => <Item key={item.id} data={item} />;

  render() {
    const { bookSelected } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{bookSelected.map(this.renderItems)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total : {this.total()}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  bookSelected: arrayOf(bookSelectedPropType).isRequired
};

const mapStateToProps = state => ({
  bookSelected: state.bookSelected
});

export default connect(mapStateToProps)(ShoppingCart);
