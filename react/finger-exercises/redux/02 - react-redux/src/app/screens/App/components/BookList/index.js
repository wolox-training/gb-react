import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionsCreators as bookActions } from '../../../../../redux/book/actions';

import styles from './styles.scss';

const getConfigButton = showButton => showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;

const getBookSelected = selectedBooks => !selectedBooks.some(el => el.id === item.id); 

class BookList extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getBooks();
    }, 2000);
  }
  render() {
    const { books, selectedBooks } = this.props;
  return books.length ? 
    books.map((item) => (
      <Book key={item.id} data={item} configButton={getConfigButton(getBookSelected(selectedBooks))} />
    ))
           : (
              <div className={styles.noData}>
                <h2 className={styles.title}>No Data</h2>
              </div>
            )
           }
}

const mapStateToProps = state => ({
  books: state.books,
  selectedBooks: []
});

const mapDispatchToProps = dispatch => ({
  getBooks: () => dispatch(bookActions.getBooks())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);