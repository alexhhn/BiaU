import React, { Component } from 'react';
import { View } from 'react-native';
import Home from './containers/home';
import Reset from './containers/reset';

import allReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(logger));
export default class BiaU extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Reset />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
