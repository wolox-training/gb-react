import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import { actionsCreators as bookActions } from '../../../../../../../redux/book/actions';

import styles from './styles.scss';

class Item extends PureComponent {
  addItem = () => {
    const { item, addItem } = this.props;
    addItem(item.id);
  };

  removeItem = () => {
    const { item, removeItem } = this.props;
    removeItem(item.id);
  };

  render() {
    const { item } = this.props;
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{item.name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{item.quantity}</span>
          <Button className={styles.buttonCart} onClick={this.addItem}>
            <i className="fa fa-plus" />
          </Button>
          <Button className={styles.buttonCart} onClick={this.removeItem} isDanger>
            <i className="fa fa-trash" />
          </Button>
        </span>
      </li>
    );
  }
}

Item.propTypes = {
  item: bookSelectedPropType,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(bookActions.addItem(item)),
  removeItem: itemId => dispatch(bookActions.removeItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);
