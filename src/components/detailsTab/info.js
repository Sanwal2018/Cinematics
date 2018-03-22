import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
var { height, width } = Dimensions.get('window');
class Info extends Component {
      constructor(props) {
            super(props);
      }

      componentWillReceiveProps = (nextProps) => {

      }

      componentDidMount = () => {
      }
      render() {
            console.log("info props : ", this.props);
            return (
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 0.2, marginLeft: 0, marginRight: 5, marginBottom: 10, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                              <TouchableOpacity style={styles.infoTouchTab} >
                                    <Icon name="star" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.infoTouchTab}>
                                    <Icon name="share-alt" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.infoTouchTab}>
                                    <Icon name="ellipsis-v" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.infoTouchTab} >
                                    <Icon name="home" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.infoTouchTab} >
                                    <Icon name="share-alt" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.infoTouchTab}>
                                    <Icon name="ellipsis-v" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={styles.infoTouchTabText}>Rate</Text>
                              </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.8 }}>
                              <View style={{ marginLeft: width * 0.015, marginRight: width * 0.015 }}>
                                    <Text style={{ color: '#000', textAlign: 'justify', marginBottom: height * 0.012 }}>{this.props.data.info.overview}</Text>
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
                                          <Text style={styles.infoText}> {this.props.data && this.props.data.cast && this.props.data.cast.crew && this.props.data.cast.crew[0] && this.props.data.cast.crew[0].job=='Director'?this.props.data.cast.crew[0].name : 'N/A'}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Info);
