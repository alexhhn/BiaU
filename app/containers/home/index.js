import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, FlatList, TextInput } from 'react-native';
import { addPlayer } from '../../actions/players';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-native-modalbox';

class Home extends Component {
  state = {
    playerName: 'No name',
  };

  _handlePlayerName = text => {
    this.setState({ playerName: text });
  };

  _onAddPlayer = () => {
    this.props.addPlayer(this.state.playerName);
    this.refs.addPlayerModal.close();
  };

  _renderAddPlayerModal = () =>
    <Modal style={styles.modal} ref={'addPlayerModal'} swipeToClose={true} position="center">
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
      <Button title="Add" onPress={() => this._onAddPlayer()} />
    </Modal>;

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Players </Text>
          <FlatList
            style={styles.list}
            data={this.props.players}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) =>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.item}>
                  {item.name}
                </Text>
                <Text>
                  {item.point}
                </Text>
              </View>}
          />
        </View>
        <Button title="New Player" onPress={() => this.refs.addPlayerModal.open()} />
        {this._renderAddPlayerModal()}
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
    maxHeight: '50%',
  },

  item: {
    width: '70%',
  },

  modal: {
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
