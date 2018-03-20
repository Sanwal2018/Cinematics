import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import Carousel from 'react-native-carousel';
const imgPath = "https://image.tmdb.org/t/p/w500/";
var { height, width } = Dimensions.get('window');
class MovieDetails extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  sliderImages: []
            }
      }
      componentWillReceiveProps = (nextProps) => {
            if (this.props.sliderImages != nextProps.sliderImages) {
                  this.setState({ sliderImages: nextProps.sliderImages });
            }
      }

      componentDidMount = () => {
            this.props.sliderData(this.props.movie_id);
      }

      render() {
            return (

                  <View>
                        <Carousel width={width}
                              animate={false}
                              indicatorSize={20}
                              indicatorColor="#4A7EFF"
                              inactiveIndicatorColor="#dadada"
                              indicatorAtBottom={true}
                              indicatorOffset={0}
                        >
                              <View style={{
                                    width: width, height: height,
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    backgroundColor: '#fff',
                                    marginTop: -100,
                              }}>
                                    <Image source={CAROUSEL_IMAGE_1} style={{
                                          width: width,
                                          flex: 1,
                                          resizeMode: 'contain'
                                    }} />
                              </View>
                        </Carousel>
                  </View >
            )
      }
}
mapStateToProps = (state, props) => {
      return {
            sliderImages: state.searchReducer.data
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
