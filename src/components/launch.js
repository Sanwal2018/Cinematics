import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
// import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
import NowPlaying from './tabs/nowPlaying';
import TopBoxOffice from './tabs/topBoxOffice';
import Anticipated from './tabs/anticipated';
import Upcoming from './tabs/upcoming';
var { height, width } = Dimensions.get('window');
import icon from '../img/icon.png';
class Launch extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isListSingleRow: false
            }
      }
      componentDidMount = () => {
            //      SplashScreen.hide();
      }
      render() {
            console.log("Actions : ", Actions)
            return (
                  <View style={styles.container}>
                        <View style={{ flex: 0.08, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#333435' }}>
                              <View style={{ flexDirection: 'row' }}>
                                    <View style={{ margin: 10 }}>
                                          <TouchableOpacity onPress={() => { Actions.drawerOpen() }}  >
                                                <Icon name="bars" size={20} color="#fff" style={{ padding: 5 }} />
                                          </TouchableOpacity>
                                    </View >
                                    <View style={{ margin: 10 }}>
                                          <Text style={{ textAlign: 'left', fontSize: 20, color: "#fff" }}>{this.props.title}</Text>
                                    </View>
                              </View>
                              <View style={{ flexDirection: 'row' }}>
                                    <View style={{ margin: 10 }}>
                                          <TouchableOpacity onPress={() => { this.setState({ isListSingleRow: !this.state.isListSingleRow }) }}>
                                                <Icon name={this.state.isListSingleRow ? 'list-ul' : 'table'} size={20} color="#fff" />
                                          </TouchableOpacity>
                                    </View>
                                    <View style={{ margin: 10 }}>
                                          <TouchableOpacity onPress={() => { Actions.Search() }}  >
                                                <Icon name="search" size={20} color="#fff" />
                                          </TouchableOpacity>
                                    </View>
                              </View>
                        </View>
                        <View style={{flex:0.95}}>
                              <ScrollableTabView
                                    tabBarBackgroundColor="#333435"
                                    tabBarActiveTextColor="#fff"
                                    tabBarInactiveTextColor="#BDC3C7"
                                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                                    tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                                    renderTabBar={() => <ScrollableTabBar />}>
                                    <NowPlaying tabLabel="NOW PLAYING" isListSingleRow={this.state.isListSingleRow} />
                                    <TopBoxOffice tabLabel="TOP BOX OFFICE" isListSingleRow={this.state.isListSingleRow}/>
                                    <Anticipated tabLabel="ANTICIPATED" isListSingleRow={this.state.isListSingleRow}/>
                                    <Upcoming tabLabel="UPCOMING" isListSingleRow={this.state.isListSingleRow} />
                              </ScrollableTabView>
                        </View>
                  </View>
            )
      }

}

mapStateToProps = (state, props) => {
      return {

      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Launch);

