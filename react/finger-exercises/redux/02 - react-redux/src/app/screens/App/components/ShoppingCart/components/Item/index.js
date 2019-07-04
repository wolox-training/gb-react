import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import actionsCreators from '../../../../../../../redux/book/actions';

import styles from './styles.scss';

class Item extends PureComponent {
  render() {
    const { data, addItem, removeItem } = this.props;
    return (
      <li className={styles.item}>
        <h3 className={styles.title}>{data.name}</h3>
        <span className={styles.contentButtons}>
          <span className={styles.quantity}>{data.amount}</span>
          <Button className={styles.buttonCart} onClick={() => addItem(data)}>
            <i className="fa fa-plus" />
          </Button>
          <Button className={styles.buttonCart} onClick={() => removeItem(data)} isDanger>
            <i className="fa fa-trash" />
          </Button>
        </span>
      </li>
    );
  }
}

Item.propTypes = {
  data: bookSelectedPropType,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

const mapStateToProps = state => ({
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(actionsCreators.addItem(item)),
  removeItem: item => dispatch(actionsCreators.removeItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
