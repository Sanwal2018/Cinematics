import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
// import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
import Movies from './searchTabs/movies';
import Actors from './searchTabs/actors';
import TVShows from './searchTabs/tvShows';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
var { height, width } = Dimensions.get('window');
import icon from '../img/icon.png';
import _ from 'underscore';
class Search extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  holder: "Movies",
                  query: '',
                  data: []
            }
      }

      componentWillReceiveProps = (nextProps) => {
            if (this.props.data != nextProps.data) {
                  this.setState({ data: nextProps.data });
            }

      }



      componentDidMount = () => {
            //      SplashScreen.hide();
      }
      render() {
            return (
                  <View style={styles.container}>
                        <KeyboardAwareScrollView>
                              <View style={{ flex: 0.08, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#333435' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                          <View style={{ margin: 10, flex: 0.1 }}>
                                                <TouchableOpacity onPress={() => { Actions.pop() }}  >
                                                      <Icon name="arrow-left" size={20} color="#fff" style={{ padding: 5 }} />
                                                </TouchableOpacity>
                                          </View >
                                          <View style={{ margin: 10, flex: 0.08 }}>
                                                <Icon name="search" size={20} color="#fff" style={{ padding: 5 }} />
                                          </View>
                                          <View style={{ marginLeft: 0, marginRight: 0, marginBottom: 10, flex: 0.82 }}>
                                                <TextInput placeholder={"Search " + this.state.holder + "..."} placeholderTextColor="#BDC3C7" underlineColorAndroid="transparent" style={{ borderBottomColor: "#BDC3C7", color: "#fff", borderBottomWidth: 2 }} autoFocus onChangeText={(text) => { this.setState({ query: text }); this.props.search(this.state.query) }} />
                                          </View>
                                    </View>
                              </View>
                              <ScrollableTabView
                                    tabBarBackgroundColor="#333435"
                                    tabBarActiveTextColor="#fff"
                                    tabBarInactiveTextColor="#BDC3C7"
                                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                                    tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                                    onChangeTab ={(item)=>{
                                          this.setState({holder:item.i==0?'Movies':item.i==1?'Actors':'TV Shows'})
                                    }}
                                    renderTabBar={() => <ScrollableTabBar />}>
                                    <Movies tabLabel="MOVIES" data={_.filter(this.props.data,((item,index)=>{
                                          console.log("item ",index,"testing: ",item)  
                                          return item.media_type=='movie';                                                                                  
                                    }))}  />
                                    <Actors tabLabel="ACTORS"  data={_.filter(this.props.data,((item,index)=>{
                                          console.log("item ",index,"testing: ",item)  
                                          return item.media_type=='person';                                                                                  
                                    }))} />
                                    <TVShows tabLabel="TV SHOWS"  data={_.filter(this.props.data,((item,index)=>{
                                          console.log("item ",index,"testing: ",item)  
                                          return item.media_type=='tv';                                                                                  
                                    }))} />
                              </ScrollableTabView>
                        </KeyboardAwareScrollView>
                  </View>
            )
      }

}

mapStateToProps = (state, props) => {
      return {
            data: state.searchReducer.data
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

