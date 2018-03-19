import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, FlatList, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import { Avatar } from 'react-native-elements';
const imgPath = "https://image.tmdb.org/t/p/w500/";
var { height, width } = Dimensions.get('window');
class NowPlaying extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  loading: true,
                  movies: [],
                  currentPage: 1,
                  lang:'en-US'
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
            this.props.nowPlaying(this.state.lang, this.state.currentPage);
      }
      render() {
            console.log("props : ", this.props);
            movieList =
                  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
                        {this.props.movies ?
                              <FlatList
                                    numColumns={this.props.isListSingleRow?1:3}
                                    scrollEnabled={true}
                                    data={this.props.movies}
                                    onEndReachedThreshold={() => {
                                          this.setState({ currentPage: 1 })
                                          this.props.nowPlaying(this.state.lang, this.state.currentPage)
                                    }}
                                    onRefresh={()=>{
                                          this.setState({ currentPage: this.state.currentPage + 1 })
                                          this.props.nowPlaying(this.state.lang,this.state.currentPage)
                                    }}
                                    refreshing={false}
                                    keyExtractor={item=>item.id}
                                    key={this.props.isListSingleRow?item => item.id.toString():item=>item.id*0.1.toString()}
                                    renderItem={({ item, index }) => {
                                          console.log("item:", item);
                                          return (
                                                <View style={{ height: 180, width: 100, margin: 5, backgroundColor: '#BDC3C7' }}>
                                                      <Image source={{ uri: imgPath + item.poster_path }} style={{ width: 100, height: 130 }} />
                                                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                                            <View style={{ flex: 0.8 }}>
                                                                  <Text style={{ fontFamily: "Verdana", fontSize: 12, marginTop: 5, fontWeight: 'bold', color: '#000' }}> {item.title}</Text>
                                                            </View>
                                                            <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                                                                  <Icon name="ellipsis-v" size={20} color="#000" onPress={() => { alert(item) }} />
                                                            </View>
                                                      </View>
                                                </View>
                                          )
                                    }}
                              />
                              : null
                        }
                  </View>
            return (
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: "center" }}>
                        <View style={{ flex: 0.95 }}>
                              {movieList}
                        </View>

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
