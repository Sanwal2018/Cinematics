import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import { Avatar } from 'react-native-elements';
class Review extends Component {
      constructor(props) {
            super(props);
            console.log("props hhhhh : ", this.props);
      }
      render() {
            reviewList =
                  <View style={{ flex: 0.8, padding: 10 }}>
                        {this.props.data.review.results ?
                              <FlatList
                                    numColumns={1}
                                    scrollEnabled={false}
                                    data={this.props.data.review.results}
                                    keyExtractor={item => item.author.toString()}
                                    renderItem={({ item, index }) => {
                                          console.log(item);
                                          return (
                                                <View>
                                                      <Text style={{ fontFamily: "Verdana", fontSize: 12, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.author}</Text>
                                                </View>
                                          )
                                    }}
                              />
                              : null
                        }
                  </View>
            return (
                  <View>
                        <Text>Reviews Goes here</Text>
                        <FlatList
                              numColumns={1}
                              scrollEnabled={true}
                              data={this.props.data.review.results}
                              keyExtractor={item => item.author.toString()}
                              renderItem={({ item, index }) => {
                                    console.log(item);
                                    return (
                                          <View>
                                                <Text style={{ fontFamily: "Verdana", fontSize: 18, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.author}</Text>
                                                <Text>{item.content}</Text>
                                          </View>
                                    )
                              }}
                        />

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

export default connect(mapStateToProps, mapDispatchToProps)(Review);
