import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Link } from 'react-router-native';
import { addPlayer } from '../../actions/players';

class Reset extends Component {
  state = {
    playerName: '',
  };

  _handlePlayerName = text => {
    this.setState({ playerName: text });
  };

  _onAddPlayer = () => {
    this.setState({ playerName: '' });
    this._nameInput.setNativeProps({ text: '' });
    this.props.addPlayer(this.state.playerName);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Insert player names</Text>
        <View>
          <FlatList
            style={styles.list}
            data={this.props.players}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) =>
              <View style={styles.items}>
                <Text style={styles.item}>
                  {item.name}
                </Text>
              </View>}
          />

          <TextInput
            ref={component => (this._nameInput = component)}
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
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  list: {
    maxHeight: '60%',
    width: '90%',
  },

  items: {
    flexDirection: 'column',
  },

  item: {
    fontSize: 18,
    marginBottom: 8,
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
  return { players: state.players };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ addPlayer }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Reset);
