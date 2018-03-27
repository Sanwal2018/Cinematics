import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import { Avatar } from 'react-native-elements';
class Review extends Component {
      constructor(props) {
            super(props);

      }
      render() {
            if (this.props.loading) {
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
                        this.props.data && this.props.data.review && this.props.data.review.length > 0 ? <FlatList
                              numColumns={1}
                              scrollEnabled={true}
                              data={this.props.data.review}
                              keyExtractor={item => item.author.toString()}
                              renderItem={({ item, index }) => {
                                    return (
                                          <View style={{margin:5, justifyContent:'center', alignContent:'flex-start', borderBottomColor="#6C7A89"}}>
                                                <Text style={{ fontFamily: "Verdana", fontSize: 18, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.author}</Text>
                                                <Text>{item.content}</Text>
                                          </View>
                                    )
                              }}
                        /> :
                              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:20,fontWeight:bold}}>No ReviewFound</Text>
                              </View>
                  )
            }
      }
}
mapStateToProps = (state, props) => {
      return {

      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);
