import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, FlatList, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import { Avatar } from 'react-native-elements';
class NowPlaying extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  loading: true,
                  movies: []
            }
      }
      componentWillReceiveProps = (nextProps) => {
            console.log("next props : ", nextProps)
            if (nextProps.movies != this.props.movies) {
                  this.setState(
                        this.state.movies = nextProps.movies
                  );
            }
      }
      componentDidMount = () => {
            this.props.nowPlaying();
      }
      render() {
            console.log("props : ", this.props);
            movieList =
                  <View style={{ justifyContent: "center", alignContent: 'center', backgroundColor: 'red' }}>
                        {this.props.movies ?
                              <FlatList
                                    numColumns={3}
                                    scrollEnabled={true}
                                    data={this.props.movies}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item, index }) => {
                                          console.log("item:", item);
                                          return (
                                                <View style={{}}>
                                                      <Avatar large source={{ uri: item.poster_path }} />
                                                      <Text style={{ fontFamily: "Verdana", fontSize: 12, marginLeft: 10, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.original_title}</Text>
                                                </View>
                                          )
                                    }}
                              />
                              : null
                        }
                  </View>
            return (
                  <View style={{ height: 500 }}>
                        {movieList}
                  </View>
            )
      }
}
mapStateToProps = (state, props) => {
      console.log("state : ", state);
      return {
            movies: state.movieReducer.data,
            loading: state.movieReducer.loading
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
