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
import { addPlayer } from '../../actions/players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-native-modalbox';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Link } from 'react-router-native';

class Home extends Component {
  _handlePoints = text => {
    this.setState({ points: text });
  };

  _onAddPlayer = () => {
    this.props.addPlayer(this.state.playerName);
    this.refs.addPlayerModal.close();
  };

  _renderAddPlayerModal = () =>
    <Modal style={styles.modal} ref={'addPlayerModal'} swipeToClose={true} position="top">
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
    </Modal>;

  _renderAddPointsModal = () =>
    <Modal style={styles.modal} ref={'addPointsModal'} swipeToClose={true} position="top">
      <TextInput
        placeholder="0"
        autoCorrect={false}
        style={{
          width: 30,
          marginBottom: 20,
          fontSize: 30,
          padding: 5,
        }}
        onChangeText={this._handlePoints}
        autoFocus={true}
        keyboardType="numeric"
      />
      <Button title="Confirm" onPress={() => this._onAddPlayer()} />
    </Modal>;

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              padding: 20,
              width: 300,
              justifyContent: 'space-between',
            }}
          >
            <Text>Name</Text>
            <Text>Points</Text>
          </View>

          <FlatList
            style={styles.list}
            data={this.props.players}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <Text>
                  {item.name}
                </Text>
                <Text>
                  {item.point}
                </Text>
                <TouchableHighlight onPress={() => this.refs.addPointsModal.open()}>
                  <FontAwesome style={{ fontSize: 30, color: 'red' }}>
                    {Icons.pencil}
                  </FontAwesome>
                </TouchableHighlight>
              </View>}
          />
        </View>
        <Button title="Add points" onPress={() => this.refs.addPlayerModal.open()} />
        <Link to="/">
          <Text>Reset</Text>
        </Link>

        {this._renderAddPlayerModal()}
        {this._renderAddPointsModal()}
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
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
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
  return { players: state.players };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addPlayer,
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
