import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, ActivityIndicator } from 'react-native';
import * as myActions from '../../actions/';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from '../styles';
import ListView from './listView';
class Anticipated extends Component {
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
            if (nextProps.movies != this.props.movies) {
                  this.setState(
                        this.state.movies = nextProps.movies
                  );
            }

      }
      componentDidMount = () => {
            this.props.getAnticipated(this.state.lang, this.state.currentPage);
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
                        <ListView list={this.props.movies} isListSingleRow={this.props.isListSingleRow} />
                  )
            }
      }
}
mapStateToProps = (state, props) => {
      return {
            movies: state.movieReducer.anticipated,
            loading: state.movieReducer.loading
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Anticipated);
