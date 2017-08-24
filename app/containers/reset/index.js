import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Link } from 'react-router-native';

class Reset extends Component {
  _onAddPlayer = () => {};
  render() {
    return (
      <View style={styles.container}>
        <Text>hei</Text>
        <View>
          <TextInput
            placeholder="Player Name"
            autoCorrect={false}
            style={{
              width: '80%',
              marginBottom: 20,
              borderWidth: 1,
              borderColor: 'grey',
              padding: 5,
            }}
            onChangeText={this._handlePlayerName}
            autoFocus={true}
          />
          <Button title="Confirm" onPress={() => this._onAddPlayer()} />
        </View>
        <Link to="/home">
          <Text>Ready</Text>
        </Link>
        <Button title="Ready" onPress={() => this._onAddPlayer()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  list: {
    maxHeight: '80%',
    width: '90%',
  },

  item: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
  },

  modal: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
  },
});

function mapStateToProps(state) {
  return {};
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Reset);
