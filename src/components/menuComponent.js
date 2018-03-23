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
class MenuComponent extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isListSingleRow: true
            }
      }
      componentWillReceiveProps = (nextProps) => {
      }

      componentDidMount = () => {
            //   
      }


      render() {
            return (
                  <View style={{ flex: 0.08, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#333435' }}>
                        <View style={{ flexDirection: 'row' }}>
                              <View style={{ margin: 10 }}>
                                    <TouchableOpacity onPress={() => { Actions.drawerOpen() }}  >
                                          <Icon name="bars" size={20} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity>
                              </View >
                              <View style={{ margin: 10 }}>
                                    <Text style={{ textAlign: 'left', fontSize: 20, color: "#fff" }}>Cinematics</Text>
                              </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                              <View style={{ margin: 10 }}>
                                    <TouchableOpacity onPress={() => {
                                          this.setState({ isListSingleRow: !this.state.isListSingleRow })
                                          this.props.updateListView();
                                    }}>
                                          <Icon name={this.props.isListSingleRow ? 'table' : 'list-ul'} size={20} color="#fff" />
                                    </TouchableOpacity>
                              </View>
                              <View style={{ margin: 10 }}>
                                    <TouchableOpacity onPress={() => { Actions.Search() }}  >
                                          <Icon name="search" size={20} color="#fff" />
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </View>
            )
      }
}

mapStateToProps = (state, props) => {
      return {
            isListSingleRow: state.listReducer.isListSingleRow
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);