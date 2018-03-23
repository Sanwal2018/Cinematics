import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, ActivityIndicator } from 'react-native';
import * as myActions from '../../actions/tvActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import ListView from './listView';
class OnTheAir extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  tvData: []
            }
      }
      componentWillReceiveProps = (nextProps) => {
            console.log("props: ", this.props);
            console.log("Nextprops: ", nextProps);
            if (nextProps.tvData != this.props.tvData) {
                  this.setState(
                        tvData = nextProps.tvData
                  );
            }
      }
      componentDidMount = () => {
            this.props.onTheAir();
      }
      render() {
            if (this.props.loading) {
                  return (
                        <View style={styles.ActivityIndicatorContainer}>
                              <ActivityIndicator
                                    animating={true}
                                    style={{ height: 80 }}
                                    size='large'
                                    color='black'
                              />
                        </View>
                  )
            } else{
                  return (
                        <ListView list={this.props.tvData} isListSingleRow={this.props.isListSingleRow}/>
                  )
            }
      }
}
mapStateToProps = (state, props) => {
      return {
            tvData:state.tvReducer.ontheair
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OnTheAir);
