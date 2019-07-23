import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

import MyButton from './components/MyButton.js';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#00ced1', '#483d8b']}
          style={{ flex: 1, padding: 30, alignItems: 'center', justifyContent: 'center' }} >
          <Text style={{ marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Pharetra vel turpis nunc eget lorem dolor. Urna molestie at elementum eu facilisis sed.
        </Text>
          <TouchableHighlight
            underlayColor='black'
            style={styles.button}
            onPress={this._onPressButton}
          >
            <Button
              title="Go to Details"
              onPress={() => {
                console.log("Detail Button Pressed");
                this.props.navigation.navigate('Details')
              }}
            />
          </TouchableHighlight>
          
          <Button
              title="Go to Info"
              onPress={() => {
                console.log("Info Button Pressed");
                this.props.navigation.navigate('Info')
              }}
            />

        </LinearGradient>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#00ced1', '#483d8b']}
          style={{ flex: 1, padding: 30, alignItems: 'center', justifyContent: 'center' }} >
          <Text>Details Screen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </LinearGradient>
      </View>
    );
  }
}

class InfoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
        <LinearGradient
          colors={['#00ced1', '#483d8b']}
          style={{ flex: 1, padding: 30, alignItems: 'center', justifyContent: 'center' }} >
          <Text>Info Screen</Text>
          <Button
            title="Go back"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </LinearGradient>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          header: null,
        },
      },
      Details: {
        screen: DetailsScreen,
        navigationOptions: {
          header: null,
        },
      },
      Info: {
        screen: InfoScreen,
        navigationOptions: {
          header: null,
        }
      },
      initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
