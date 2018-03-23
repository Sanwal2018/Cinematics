import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, View, BackgroundImage, TextInput, FlatList, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import * as myActions from '../../actions/popularAction'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
const imgPath = "https://image.tmdb.org/t/p/w500/";
class PopularPeople extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  people: []
            }
      }

      componentDidMount = () => {
            this.props.popularPeople();
      }

      componentWillReceiveProps = (nextProps) => {
            this.setState({ people: nextProps.people });
      }

      render() {
            if (this.props.loading) {
                  return (
                        <View style={styles.ActivityIndicatorContainer}>
                              <ActivityIndicator
                                    animating={true}
                                    style={{ height: 80 }}
                                    size='large'
                                    color='black'
                              />
                        </View>
                  )
            } else {
                  return (
                        <View style={styles.container}>
                              <View style={{ flex: 0.08, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: '#333435' }}>
                                    <View style={{ flexDirection: 'row' }}>
                                          <View style={{ margin: 10 }}>
                                                <TouchableOpacity onPress={() => { Actions.drawerOpen() }}  >
                                                      <Icon name="bars" size={20} color="#fff" style={{ padding: 5 }} />
                                                </TouchableOpacity>
                                          </View >
                                          <View style={{ margin: 10 }}>
                                                <Text style={{ textAlign: 'left', fontSize: 20, color: "#fff" }}>Popular People</Text>
                                          </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                          <View style={{ margin: 10 }}>
                                                <TouchableOpacity onPress={() => { Actions.Search() }}  >
                                                      <Icon name="search" size={20} color="#fff" />
                                                </TouchableOpacity>
                                          </View>
                                    </View>
                              </View>
                              <View style={{ flex: 0.92}}>{
                                    this.props.people ?
                                          <FlatList
                                                numColumns={1}
                                                scrollEnabled={true}
                                                data={this.props.people}
                                                keyExtractor={item => item.id.toString()}
                                                renderItem={({ item, index }) => {
                                                      return (
                                                            <TouchableOpacity style={{ flex: 1, padding: 20, flexDirection: 'row', borderBottomWidth: 2, borderBottomColor: '#B5BEC6' }}>
                                                                  <View style={{ flex: 3, flexDirection: 'column', }} >
                                                                        <Image source={{ uri: imgPath + item.profile_path }} resizeMethod='resize' style={{ borderRadius: 100, width: 80, height: 80 }} />
                                                                  </View>
                                                                  <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'center' }} >
                                                                        <Text style={{ color: "#000", fontSize: 15, fontWeight: 'bold' }}> {item.name}</Text>
                                                                  </View>
                                                            </TouchableOpacity>
                                                      )
                                                }}
                                          /> :
                                          <View>
                                                <Text>No PopularPeople. Found</Text>
                                          </View>}
                              </View>
                        </View>
                  )
            }
      }
}
mapStateToProps = (state, props) => {
      return {
            people: state.personReducer.data,
            loading: state.personReducer.loading
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopularPeople);
