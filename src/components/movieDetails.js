import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import Carousel from 'react-native-smart-carousel';
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
            this.props.sliderData(this.props.movie.id);
      }

      generateImages = () => {
            imageSource = [];
            let id = 1;
            this.props.sliderImages.forEach((item) => {
                  myObj = {
                        id: id,
                        imagePath: imgPath + item.file_path
                  };
                  id=id+1;
                  imageSource.push(myObj);
            })
            return imageSource;
      }

      render() {
            this.generateImages();
            return (

                  <View>
                        <Carousel
                              data={this.generateImages()}
                              autoStart={true}
                              playTime={1000}
                              height={height*0.35}
                              width={width}
                              navigation={true}
                              navigationType='dots'
                              navigationColor="#fff"
                              style={{resizeMode:'stretch'}}
                        />
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
