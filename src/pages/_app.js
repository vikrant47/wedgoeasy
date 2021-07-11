import { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import withReduxStore from '../lib/with-redux-store';
import { fetchProducts } from '../redux/actions/productActions';
import products from '../data/products.json';
import '../assets/scss/style.scss';
import '../assets/scss/custom.scss';
import Preloader from '../components/Preloader';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
    props.reduxStore.dispatch(fetchProducts(products));
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <>
        <ToastProvider placement='bottom-left'>
          <Provider store={reduxStore}>
            <PersistGate loading={<Preloader/>} persistor={this.persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </ToastProvider>
      </>
    );
  }
}

export default withReduxStore(MyApp);
