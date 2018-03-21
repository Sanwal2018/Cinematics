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
            this.state = {
                  info: []
            }
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
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }} >
                                    <Icon name="star" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }}>
                                    <Icon name="share-alt" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }}>
                                    <Icon name="ellipsis-v" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }} >
                                    <Icon name="home" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }} >
                                    <Icon name="share-alt" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={{ flexDirection: 'column', flex: 0.2, alignItems: 'center', }}>
                                    <Icon name="ellipsis-v" size={20} color="green" style={{ padding: 5 }} />
                                    <Text style={{ color: '#000', fontSize: 12 }}>Rate</Text>
                              </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.8 }}>
                              <View style={{ marginLeft: width * 0.015, marginRight: width * 0.015 }}>
                                    <Text style={{ color: '#000', textAlign: 'justify', marginBottom: height * 0.012 }}>{this.props.info.overview}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ color: '#000', textAlign: 'justify', fontWeight: 'bold' }}>Release Date:</Text>
                                          <Text style={{ color: '#000', textAlign: 'justify' }}>{this.props.info.release_date ? this.props.info.release_date : 'N/A'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ color: '#000', textAlign: 'justify', fontWeight: 'bold' }}>DVD Release Date:</Text>
                                          <Text style={{ color: '#000', textAlign: 'justify' }}> {this.props.info.dvd_release_date ? this.props.info.dvd_release_date : 'N/A'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ color: '#000', textAlign: 'justify', fontWeight: 'bold' }}>Directed By:</Text>
                                          <Text style={{ color: '#000', textAlign: 'justify' }}> {this.props.info.directed_by ? this.props.info.directed_by : 'N/A'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ color: '#000', textAlign: 'justify', fontWeight: 'bold' }}>Budget:</Text>
                                          <Text style={{ color: '#000', textAlign: 'justify' }}> {this.props.info.budget ? '$' + this.props.info.budget : 'N/A'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Text style={{ color: '#000', textAlign: 'justify', fontWeight: 'bold' }}>Revenue:</Text>
                                          <Text style={{ color: '#000', textAlign: 'justify' }}> {this.props.info.revenue ? '$' + this.props.info.revenue : 'N/A'}</Text>
                                    </View>
                              </View>
                        </View>
                  </View>
            )
      }
}
mapStateToProps = (state, props) => {
      return {
            info: state.detailReducer.data,
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
