import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, ScrollView, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/discoverActions';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import icon from '../../img/TMDb.png';
var { height, width } = Dimensions.get('window');
class Sidebar extends Component {
      constructor(props) {
            super(props);
      }
      render() {
            return (
                  <View style={styles.sidemenumaindiv}>
                        
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
