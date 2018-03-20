import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, FlatList, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
const imgPath = "https://image.tmdb.org/t/p/w500/";
var { height, width } = Dimensions.get('window');
class Movies extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  data_: this.props.data_
            }
      }
      componentWillReceiveProps = (nextProps) => {
            console.log("props recived : ", nextProps);
            this.setState({ data_: nextProps.data_ });
      }
      render() {
            movieList =
                  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
                        {this.props.data_ ?
                              <FlatList
                                    numColumns={1}
                                    scrollEnabled={true}
                                    data={this.props.data_}
                                    extraData={this.state.data_}
                                    keyExtractor={item => item.id.toString()}
                                    refreshing={true}
                                    renderItem={({ item, index }) => {
                                          console.log("item in flatlist  : ", item);
                                          return (
                                               // item.media_type == 'movie' ?
                                                      <View style={{ height: height * 0.2, width: 'row', borderBottomWidth: 2, borderBottomColor: '#BDC3C7', }}>
                                                            <Text>Work</Text>
                                                            {/* <View style={{ flex: 0.2 }}>
                                                                  <Image source={{ uri: imgPath + item.poster_path }} style={{ width: width * 0.20, height: height * 0.18 }} />
                                                            </View>
                                                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', flex: 0.8, marginBottom: height * 0.0015, marginLeft: width * 0.02 }}>
                                                                  <View style={{ flex: 0.8, flexWrap: 'wrap', flexDirection: 'column' }}>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', color: '#6C7A89' }}>
                                                                              {new Date(item.release_date).getFullYear()}
                                                                        </Text>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 18, textAlign: 'left', fontWeight: 'bold', color: '#000' }} numberOfLines={2}> {item.title}</Text>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', fontWeight: 'bold', color: '#6C7A89' }}>{item.popularity}</Text>
                                                                  </View>
                                                                  <View style={{ flex: 0.2, flexDirection: 'row', marginBottom: height * 0.015 }}>
                                                                        <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ height: 30, width: 30 }} />
                                                                        <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#000' }}>  {item.vote_average}</Text>
                                                                  </View>
                                                            </View> */}
                                                      </View>
                                                  //    : null
                                          )
                                    }}
                              />
                              : null
                        }
                  </View>
            console.log("movie list : ", movieList);
            return (
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.95, }}>
                              {movieList}
                        </View>
                  </View>
            )
      }
}

mapStateToProps = (state, props) => {
      return {
            data_: state.searchReducer.data
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
