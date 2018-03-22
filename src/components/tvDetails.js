import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../actions/tvActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import Carousel from 'react-native-smart-carousel';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
var { height, width } = Dimensions.get('window');
import Info from './detailsTab/info';
import Cast from './detailsTab/cast';
import Seasons from './detailsTab/session';
class TVDetails extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  type: 'tv',
                  sliderImages: [],
                  tabCustomTitle: '',
                  info: [],
                  cast: [],
                  review: []
            }
      }
      componentWillReceiveProps = (nextProps) => {
            if (this.props.sliderImages != nextProps.sliderImages) {
                  this.setState({ sliderImages: nextProps.sliderImages });
            }
            if (this.props.info != nextProps.info) {
                  this.setState({ info: nextProps.info });
            }
            if (this.props.cast != nextProps.cast) {
                  this.setState({ cast: nextProps.cast });
            }
            if (this.props.review != nextProps.review) {
                  this.setState({ review: nextProps.review });
            }
      }

      componentDidMount = () => {
            this.props.sliderData(this.props.tv.id);
            this.props.getDetailedInfo(this.props.tv.id);
            this.props.getCasts(this.props.tv.id);
            this.props.getReview(this.props.tv.id);
      }

      render() {
            return (
                  <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', position: 'absolute', backgroundColor: 'transparent', zIndex: 99999 }}>
                              <View style={{ margin: 10, flex: 0.1 }}>
                                    <TouchableOpacity onPress={() => { Actions.TVShows() }}  >
                                          <Icon name="arrow-left" size={20} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity>
                              </View >
                              <View style={{ margin: 10, flex: 0.7 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}> {this.state.tabCustomTitle ? this.state.tabCustomTitle : ''} </Text>
                              </View>
                              <View style={{ flex: 0.2, marginLeft: 0, marginRight: 5, marginBottom: 10, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', }}>
                                    <TouchableOpacity  >
                                          <Icon name="home" size={20} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity><TouchableOpacity >
                                          <Icon name="share-alt" size={20} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity><TouchableOpacity>
                                          <Icon name="ellipsis-v" size={20} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity>
                              </View>
                        </View>
                        <View style={{ backgroundColor: '#333435', flex: 0.8 }}>
                              <View style={{ flex: 0.6, }}>
                                    <Carousel
                                          data={this.props.sliderImages}
                                          autoStart={true}
                                          playTime={1000}
                                          height={height * 0.27}
                                          width={width}
                                          navigation={true}
                                          navigationType='dots'
                                          navigationColor="#fff"
                                          style={{ resizeMode: 'stretch' }}
                                    />
                              </View>
                              <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'flex-end', alignContent: 'flex-end', marginTop: height * .03, backgroundColor: '#333435' }}>
                                    <View style={{ flex: 0.7, flexDirection: 'column' }}>
                                          <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ borderWidth: 2, borderColor: '#6C7A89', textAlign: 'center', color: '#6C7A89' }}> {this.props.info.adult ? 18 : 'N/A'} </Text>
                                                <Icon name="circle" size={8} color='#6C7A89' style={{ padding: 5 }} />
                                                <Text style={{ textAlign: 'center', color: '#6C7A89' }}> {new Date(this.props.tv.first_air_date).getFullYear()} </Text>
                                                <Icon name="circle" size={8} color='#6C7A89' style={{ padding: 5 }} />
                                                <Text style={{ textAlign: 'center', color: '#6C7A89' }}> {this.props.tv.runtime}</Text>
                                          </View>
                                          <View>
                                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}> {this.props.tv.name} </Text>
                                          </View>
                                          <View>
                                                <Text style={{ color: '#6C7A89' }}> Drama, Romance </Text>
                                          </View>
                                    </View>
                              </View>
                              <Image source={{ uri: imgPath + this.props.tv.poster_path }} style={{ width: width * 0.20, height: height * 0.18, position: 'absolute', zIndex: 999, marginTop: height * 0.23, marginLeft: width * 0.05 }} />
                        </View>
                        <ScrollableTabView
                              tabBarBackgroundColor="#6C7A89"
                              tabBarActiveTextColor="#fff"
                              tabBarInactiveTextColor="#BDC3C7"
                              tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 12 }}
                              tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                              renderTabBar={() => <ScrollableTabBar />}>
                              <Info tabLabel="INFO" data={{ info: this.props.info, cast: this.props.cast, review: this.props.review, type: this.state.type }} />
                              <Cast tabLabel="ACTORS" data={{ info: this.props.info, cast: this.props.cast, review: this.props.review, type: this.state.type }} />
                              <Seasons tabLabel="SEASONS" data={{ info: this.props.info, cast: this.props.cast, review: this.props.review, type: this.state.type }} />
                        </ScrollableTabView>
                  </View >
            )
      }
}
mapStateToProps = (state, props) => {
      return {
            sliderImages: state.searchReducer.data,
            info: state.detailReducer.data,
            cast: state.castReducer.data,
            review: state.reviewReducer.data
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TVDetails);
