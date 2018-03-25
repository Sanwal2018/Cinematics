import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {  View,TextInput, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
class Info extends Component {
      constructor(props) {
            super(props);
      }

      componentWillReceiveProps = (nextProps) => {

      }

      componentDidMount = () => {
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
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                              <View style={styles.infoRateBar}>
                                    <TouchableOpacity style={styles.infoTouchTab} >
                                          <Icon name="star" size={20} color="green" style={{ padding: 5 }} />
                                          <Text style={styles.infoTouchTabText}>Rate</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoTouchTab}>
                                          <Image source={{ uri: 'https://cdn-images-1.medium.com/fit/c/45/45/1*vIR7iO-1GnY2xYxL6NiYkw.png' }} style={styles.rateImage} />
                                          <Text style={styles.infoTouchTabText}>{this.props.data.info.vote_average}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoTouchTab}>
                                          <Image source={{ uri: 'http://www.adventisthealth.tv/wp-content/uploads/2017/04/IMDb.png' }} style={styles.rateImage} />
                                          <Text style={styles.infoTouchTabText}>7.8</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoTouchTab} >
                                          <Image source={{ uri: 'http://www.adventisthealth.tv/wp-content/uploads/2017/04/IMDb.png' }} style={styles.rateImage} />
                                          <Text style={styles.infoTouchTabText}>97%</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoTouchTab} >
                                          <Image source={{ uri: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTX9ydPu_WGRcDl7oL-SHuHEMugIS9E4uzx2lZkYOg6JanwQhj7' }} style={styles.rateImage} />
                                          <Text style={styles.infoTouchTabText}>79%</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.infoTouchTab}>
                                          <Icon name="ellipsis-v" size={30} color="green" style={{ padding: 5 }} />
                                    </TouchableOpacity>
                              </View>
                              <View style={{ flex: 0.8 }}>
                                    <View style={styles.infoOverView}>
                                          <Text style={styles.infoOverViewText}>{this.props.data.info.overview}</Text>
                                          <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.infoHeads}>{this.props.data.type == 'movie' ? 'Release Date' : 'First Air Date'}:</Text>
                                                <Text style={styles.infoText}> {this.props.data.info.release_date ? this.props.data.info.release_date : this.props.data.info.first_air_date}</Text>
                                          </View>
                                          <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.infoHeads}>{this.props.data.type == 'movie' ? 'DVD Release Date' : 'Last Air Date'}:</Text>
                                                <Text style={styles.infoText}> {this.props.data.movie ? this.props.data.info.dvd_release_date : this.props.tv ? this.props.info.last_air_date : 'N/A'}</Text>
                                          </View>
                                          {this.props.data.type == 'tv' ?
                                                <View style={{ flexDirection: 'row' }}>
                                                      <Text style={styles.infoHeads}>Networks:</Text>
                                                      <Text style={styles.infoText}> {this.props.data.info.networks ? this.props.data.info.networks[0].name : 'N/A'}</Text>
                                                </View>
                                                : null}
                                          <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.infoHeads}>{this.props.data.type == 'movie' ? 'Directed By' : 'Created By'}:</Text>
                                                <Text style={styles.infoText}> {this.props.data && this.props.data.cast && this.props.data.cast.crew && this.props.data.cast.crew[0] && this.props.data.cast.crew[0].job == 'Director' ? this.props.data.cast.crew[0].name : 'N/A'}</Text>
                                          </View>
                                          {this.props.data.type == 'movie' ?
                                                <View style={{ flexDirection: 'row' }}>
                                                      <Text style={styles.infoHeads}>Budget:</Text>
                                                      <Text style={styles.infoText}> {this.props.data.info.budget ? '$' + this.props.data.info.budget : 'N/A'}</Text>
                                                </View>
                                                :
                                                <View style={{ flexDirection: 'row' }}>
                                                      <Text style={styles.infoHeads}>Show Type:</Text>
                                                      <Text style={styles.infoText}> {this.props.data.info.type ? this.props.data.info.type : 'N/A'}</Text>
                                                </View>
                                          }
                                          {this.props.data.type == 'movie' ?

                                                <View style={{ flexDirection: 'row' }}>
                                                      <Text style={styles.infoHeads}>Revenue:</Text>
                                                      <Text style={styles.infoText}> {this.props.data.info.revenue ? '$' + this.props.data.info.revenue : 'N/A'}</Text>
                                                </View>
                                                :
                                                <View style={{ flexDirection: 'row' }}>
                                                      <Text style={styles.infoHeads}>Show Status:</Text>
                                                      <Text style={styles.infoText}> {this.props.data.info.status ? this.props.data.info.status : 'N/A'}</Text>
                                                </View>
                                          }
                                    </View>
                              </View>
                              {/* <View style={detailsparentView}>
                                    <Icon name='circle' style={{ color: 'rgb(68, 35, 124)', fontSize: 72, textAlign: 'center', position: 'relative' }} />
                                    <Icon name='plus' style={{ color: 'white', fontSize: 26, textAlign: 'center', position: 'absolute', marginLeft: width * 0.1, marginTop: 23 }} onPress={() => Actions.Add_profile()} />
                              </View> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Info);
