import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';

class Actors extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  data: [],
                  data_: [],
                  loading: true
            }
      }

      componentDidMount = () => {
            this.props.filter(this.props.data, "person")
      }

      componentWillReceiveProps = (nextProps) => {
            if (this.props.data_ != nextProps.data_) {
                  this.setState({
                        data_: nextProps.data_,
                        loading: !this.state.loading
                  })
            }
            if (this.props.data != nextProps.data) {
                  this.props.filter(this.props.data, "perosn")
            }
      }
      render() {

            console.log("props in actor : ", this.props)
            if (this.state.loading) {
                  return (
                        <View style={styles.ActivityIndicatorContainer}>
                              <ActivityIndicator
                                    animating={true}
                                    style={styles.indicatorPosition}
                                    size='large'
                                    color='black'
                              />
                        </View>
                  )
            } else {
                  return (
                        <View></View>
                  )
            }
      }
}

mapStateToProps = (state, props) => {
      return {
            data_: state.filterReducer.data
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Actors);
