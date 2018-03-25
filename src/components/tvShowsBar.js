import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/tvActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
// import SplashScreen from 'react-native-splash-screen';
import styles from './styles';
import AiringToday from './TVTabs/airingToday';
import OnTheAir from './TVTabs/onTheAir';
import Popular from './TVTabs/popular';
import TopRated from './TVTabs/topRated';
var { height, width } = Dimensions.get('window');
import icon from '../img/icon.png';
import MenuComponent from './menuComponent';
class TVShowBar extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isListSingleRow: true
            }
      }
      componentDidMount = () => {
            //      SplashScreen.hide();
      }
      render() {
            return (
                  <View style={styles.container}>
                        <MenuComponent />
                        <View style={{ flex: 0.95 }}>
                              <ScrollableTabView
                                    tabBarBackgroundColor="#333435"
                                    tabBarActiveTextColor="#fff"
                                    tabBarInactiveTextColor="#BDC3C7"
                                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                                    tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                                    renderTabBar={() => <ScrollableTabBar />}>
                                    <AiringToday tabLabel="AIRING TODAY" isListSingleRow={this.props.isListSingleRow} />
                                    <OnTheAir tabLabel="ON THE AIR" isListSingleRow={this.props.isListSingleRow} />
                                    <Popular tabLabel="POPULAR" isListSingleRow={this.props.isListSingleRow} />
                                    <TopRated tabLabel="TOP RATED" isListSingleRow={this.props.isListSingleRow} />
                              </ScrollableTabView>
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

export default connect(mapStateToProps, mapDispatchToProps)(TVShowBar);

