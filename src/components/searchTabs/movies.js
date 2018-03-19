import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import PropTypes from 'prop-types';
class Movies extends Component {
      constructor(props){
            super(props);
            this.state={
                  data:this.props.data
            }
      }
      render() {
            console.log("movie : ", this.props)
            return (
                  <View>
                        <Text>
                              props: {this.props}
                        </Text>
                  </View>
            )
      }
}

Movies.prototype={
      data:PropTypes.data
}
mapStateToProps = (state, props) => {
      return {

      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
