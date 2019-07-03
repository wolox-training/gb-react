import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, bool, shape, string, number } from 'prop-types';
import Button from '@components/Button';

import actionsCreators from '../../../../../redux/book/actions';

import styles from './styles.scss';
import { CONFIGURATION_BUTTON } from './constants';

class Book extends PureComponent {
  handleClick = () => {
    const { data, bookSelected, addToCart, removeFromCart } = this.props;
    const showButton = !bookSelected.some(el => el.id === data.id);
    const action = showButton ? addToCart : removeFromCart;

    action(this.props.data);
  }

  render() {
    const { data, bookSelected } = this.props;
    const showButton = !bookSelected.some(el => el.id === data.id);
    const configButton = showButton ? CONFIGURATION_BUTTON.add : CONFIGURATION_BUTTON.remove;

    return (
      <div className={styles.bookItem}>
        <div className={styles.book}>
          <div className={styles.bookFront}>
            <div>
              <img src={data.image} alt={data.name} className={styles.bookCover} />
            </div>
            <div />
          </div>
          <div className={styles.bookPages}>
            <div />
            <div>
              <h1 className={styles.title}>{data.name}</h1>
              <h4 className={styles.subtitle}>{data.author}</h4>
              <p>{data.summary}</p>
              <h6 className={styles.year}>Publication: {data.year}</h6>
            </div>
          </div>
          <div className={styles.bookBack} />
        </div>
        <Button {...configButton} onClick={this.handleClick} />
      </div>
    );
  }
}

Book.propTypes = {
  data: shape({
    id: number,
    name: string,
    author: string,
    image: string,
    summary: string,
    year: number
  }),
  configButton: shape({
    text: string.isRequired,
    function: func.isRequired,
    isDanger: bool
  })
};

const mapStateToProps = state => ({
  bookSelected: state.bookSelected
});

const mapDispatchToProps = dispatch => ({
  addToCart: book => dispatch(actionsCreators.addToCart(book)),
  removeFromCart: book => dispatch(actionsCreators.removeItem(book))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
