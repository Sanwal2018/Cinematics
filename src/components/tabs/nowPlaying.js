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
import renderIf from '../renderIf';
var { height, width } = Dimensions.get('window');
class NowPlaying extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  loading: true,
                  movies: [],
                  currentPage: 1,
                  lang: 'en-US'
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
                  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-around', }}>
                        {this.props.movies ?
                              <FlatList
                                    numColumns={this.props.isListSingleRow ? 1 : 3}
                                    scrollEnabled={true}
                                    data={this.props.movies}
                                    onEndReachedThreshold={() => {
                                          this.setState({ currentPage: 1 })
                                          this.props.nowPlaying(this.state.lang, this.state.currentPage)
                                    }}
                                    onRefresh={() => {
                                          this.setState({ currentPage: this.state.currentPage + 1 })
                                          this.props.nowPlaying(this.state.lang, this.state.currentPage)
                                    }}
                                    refreshing={false}
                                    keyExtractor={item => item.id}
                                    key={`${this.props.isListSingleRow ? item => item.id.toString() : item => item.id * 0.1.toString()}`}
                                    renderItem={({ item, index }) => {
                                          console.log("item:", item);
                                          return (
                                                <View style={{ height: this.props.isListSingleRow ? 130 : 210, width: this.props.isListSingleRow ? width : 120, marginTop: 5, marginLeft: 5, marginRight: 5, backgroundColor: this.props.isListSingleRow ? '#fff' : '#BDC3C7', flexDirection: this.props.isListSingleRow ? 'row' : 'column', borderBottomWidth: this.props.isListSingleRow ? 2 : 0, borderBottomColor: '#BDC3C7', }}>
                                                      <View style={{ flex: this.props.isListSingleRow ? 0.2 : 0.8 }}>
                                                            <Image source={{ uri: imgPath + item.poster_path }} style={{ width: this.props.isListSingleRow ? 80 : 120, height: this.props.isListSingleRow ? 120 : 170 }} />
                                                      </View>
                                                      {renderIf(!this.props.isListSingleRow)(
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 0.2, alignContent: 'center', alignItems: 'center' }}>
                                                                  <View style={{ flex: 0.8, flexWrap: 'wrap' }}>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', textAlignVertical: 'top', color: '#000' }} numberOfLines={2}> {item.title}</Text>
                                                                  </View>
                                                                  <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 5 }}>
                                                                        <Icon name="ellipsis-v" size={20} color="#000" onPress={() => { alert(item) }} />
                                                                  </View>
                                                            </View>
                                                      )}
                                                      {renderIf(this.props.isListSingleRow)(
                                                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', flex: 0.8, alignItems: 'flex-start', marginBottom: 5 }}>
                                                                  <View style={{ flex: 0.8, flexWrap: 'wrap' }}>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', color: '#6C7A89' }} numberOfLines={2}>
                                                                              {
                                                                                    new Date(item.release_date).getFullYear()
                                                                              }
                                                                        </Text>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 18, textAlign: 'left', fontWeight: 'bold', color: '#000' }} numberOfLines={2}> {item.title}</Text>
                                                                        <Text style={{ fontFamily: "Times New Roman", fontSize: 12, textAlign: 'left', fontWeight: 'bold', color: '#6C7A89' }} numberOfLines={2}>{item.popularity}</Text>
                                                                  </View>
                                                                  <View style={{ flex: 0.2, justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 10 }}>
                                                                        <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={{ height: 30, width: 30 }} />
                                                                        <Text style={{ textAlign: 'center', textAlignVertical: 'center', color: '#000' }}>  {item.vote_average}</Text>
                                                                  </View>
                                                            </View>
                                                      )}
                                                </View>

                                          )
                                    }}
                              />
                              : null
                        }
                  </View>
            return (
                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 0.95, justifyContent: this.props.isListSingleRow ? 'flex-start' : 'center', alignItems: this.props.isListSingleRow ? 'flex-start' : 'center' }}>
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
