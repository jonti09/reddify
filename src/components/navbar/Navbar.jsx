import React from 'react';
import { queryCookie } from '../../api';

function Navbar(props) {
  const { login, loadPosts } = props;

  const styles = {
    navBrand: {
      borderRight: 'none',
    }
  }

  const authJSX = () => {
    if (queryCookie('access_token')) {
      return (
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={loadPosts}>
          <i className="fas fa-download"></i>
          <span className="ml-2">Get Saved Posts</span>
        </button>
      );
    } else {
      return (
        <button className="btn btn-outline-warning my-2 my-sm-0" onClick={login}>
          <i className="fab fa-reddit-alien"></i>
          <span className="ml-2">Login</span>
        </button>
      );
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/" style={styles['navBrand']}>
        Reddify
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        {authJSX()}
      </div>
    </nav>
  );
}

export default Navbar;
