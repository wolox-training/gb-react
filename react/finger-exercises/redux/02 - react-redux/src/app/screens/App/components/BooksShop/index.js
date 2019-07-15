import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

import BooksList from './../BooksList';
import Search from './../Search';
import styles from './styles.scss';

class BooksShop extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          <BooksList />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default connect()(BooksShop);
