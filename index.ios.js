/**
 * React Native by lekeopen
 */
'use strict';

import React from 'react-native';
import styles from './app/Styles/Main';
import MovieList from './app/Components/MovieList';
import USBox from './app/Components/USBox';
import icons from './app/Assets/Icons';
import Featured from './app/Components/Featured';


let {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS,
} = React;


const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';

class movieleke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS barTintColor="darkslateblue" tintColor="white">
        <TabBarIOS.Item
          icon= {{uri: icons.star, scale: 4.6}}
          title="推荐电影"
          selectedIcon={{uri: icons.starActive, scale: 4.6}}
          selected={this.state.selectedTab === 'featured'}
          onPress={() => {
            this.setState({
              selectedTab: 'featured'
            });
          }}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon= {{uri: icons.board, scale: 4.6}}
          title="北美票房"
          selectedIcon={{uri: icons.boardActive, scale: 4.6}}
          selected={this.state.selectedTab === 'us_box'}
          onPress={() => {
            this.setState({
              selectedTab: 'us_box'
            });
          }}>
          <USBox />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('movieleke', () => movieleke);
