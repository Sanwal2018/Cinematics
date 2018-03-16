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
      }
      componentDidMount = () => {
            //      SplashScreen.hide();
      }
      render() {
            console.log("Actions : ", Actions)
            return (
                  <View style={styles.container}>
                        <View style={{ height: height * 0.08, alignItems: 'center', flexDirection: 'row',backgroundColor:'#333435' }}>
                              <View style={{margin:10}}>
                                    <TouchableOpacity  onPress={() => { Actions.drawerOpen }}  >
                                          <Icon name="bars" size={20} color="#fff"/>
                                    </TouchableOpacity>
                              </View>
                              <View>
                                    <Text style={{textAlign:'left', padding:1, fontSize:20,color:"#fff"}}>{this.props.title}</Text>
                              </View>
                              <View></View>
                              <View></View>
                        </View>
                        <ScrollableTabView  tabBarBackgroundColor="#333435"
                        tabBarActiveTextColor="#fff"
                        tabBarInactiveTextColor="#BDC3C7"
                              renderTabBar={() => <ScrollableTabBar />}>
                              <NowPlaying tabLabel="NOW PLAYING" />
                              <TopBoxOffice tabLabel="TOP BOX OFFICE" />
                              <Anticipated tabLabel="ANTICIPATED" />
                              <Upcoming tabLabel="UPCOMING" />
                        </ScrollableTabView>
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

