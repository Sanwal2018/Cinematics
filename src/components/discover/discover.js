import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  BackgroundImage,
  TextInput,
  FlatList,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as myActions from "../../actions/discoverActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "../styles";
const imgPath = "https://image.tmdb.org/t/p/w500/";
import ListView from "../tabs/listView";
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isListSingleRow: true,
      loading: true
    };
  }

  componentDidMount = () => {
    this.props.discover();
  };

  componentWillReceiveProps = nextProps => {
    console.log("next porps : ", nextProps);
    if (this.props.movies != nextProps.movies)
      this.setState({
        movies: nextProps.movies,
        loading: false
      });
  };

  render() {
    console.log("this props : ", this.props, "this state : ", this.state);
    if (this.state.loading) {
      return (
        <View style={styles.ActivityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={styles.indicatorPosition}
            size="large"
            color="black"
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View
            style={{
              flex: 0.08,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "#333435"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    Actions.drawerOpen("drawer");
                  }}
                >
                  <Icon
                    name="bars"
                    size={20}
                    color="#fff"
                    style={{ padding: 5 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 10 }}>
                <Text
                  style={{ textAlign: "left", fontSize: 20, color: "#fff" }}
                >
                  Discover
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    Actions.drawerOpen("filter");
                  }}
                >
                  <Icon name="filter" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 10 }}>
                <TouchableOpacity onPress={() => {}}>
                  <Icon name="sort" size={20} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      isListSingleRow: !this.state.isListSingleRow
                    });
                  }}
                >
                  <Icon
                    name={this.state.isListSingleRow ? "table" : "list-ul"}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ flex: 0.92 }}>
            <ListView
              list={this.props.movies}
              isListSingleRow={this.state.isListSingleRow}
            />
          </View>
        </View>
      );
    }
  }
}
mapStateToProps = (state, props) => {
  return {
    movies: state.discoverReducer.data
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
