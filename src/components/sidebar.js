import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, ScrollView, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import icon from '../img/TMDb.png';
var { height, width } = Dimensions.get('window');
class Sidebar extends Component {
      constructor(props) {
            super(props);
      }
      render() {
            return (
                  <View style={styles.sidemenumaindiv}>
                        <View style={{ flexDirection: 'row', height: height * 0.2, alignItems: 'center', backgroundColor: '#333435' }}>
                              <View style={{flexDirection: 'row', height: height * 0.2, alignItems: 'center' }}>
                                    <Image source={icon} style={{ top: height * 0.04 }} />
                                    <Text style={{ fontSize: 10, top: height * 0.04, color: "white", marginLeft: width * 0.01 }}>Connect to TMDb</Text>
                              </View>
                        </View>
                        <ScrollView>
                              <TouchableOpacity style={styles.sidemenuitems}       >
                                    <Icon name="film" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Movies</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}          >
                                    <Icon name="tv" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Tv Shows</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}          >
                                    <Icon name="search" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Discover</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.breakitems}          >
                                    <Icon name="user" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Popular People</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.breakitems}
                                    onPress={() => { drawer.close(); DismissKeyboard() }}>
                                    <Icon name="bell" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Reminders</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}
                                    onPress={() => { drawer.close(); DismissKeyboard() }}>
                                    <Icon name="question-circle" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Contact Developer</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}
                                    onPress={() => { drawer.close(); DismissKeyboard() }}>
                                    <Icon name="google-plus" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Google+ Community</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}
                                    onPress={() => { drawer.close(); DismissKeyboard() }}>
                                    <Icon name="unlock-alt" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Unlock Pro</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.sidemenuitems}
                                    onPress={() => { drawer.close(); DismissKeyboard() }}>
                                    <Icon name="cog" size={20} color="#BDC3C7" />
                                    <Text style={styles.sidemenuText}>Setting</Text>
                              </TouchableOpacity>
                        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
