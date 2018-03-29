import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  ScrollView,
  Text,
  Platform,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  Linking
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as myActions from "../actions/";
import DismissKeyboard from "react-native-dismiss-keyboard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "./styles";
import icon from "../img/logo.png";
var { height, width } = Dimensions.get("window");
import Image from "react-native-image-progress";
import { Dropdown } from "react-native-material-dropdown";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 2018,
      to: 2018,
      genres: [],
      selectedGenre: ""
    };
  }

  getYears = () => {
    let data = [];
    for (i = new Date().getFullYear(); i >= 1900; i--) {
      data.push({ value: i });
    }
    return data;
  };

  componentDidMount = () => {
    this.props.getGenre();
  };
  componentWillReceiveProps = nextProps => {
    if (this.props.genres != nextProps.genres) {
      this.setState({ genres: nextProps.genres });
    }
  };
  render() {
    if (this.props.drawerPosition == "left")
      return (
        <View style={styles.sidemenumaindiv}>
          <View
            style={{
              flexDirection: "row",
              height: height * 0.2,
              alignItems: "center",
              backgroundColor: "#333435"
            }}
          >
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.themoviedb.org/login")
              }
              style={{
                flexDirection: "row",
                height: height * 0.2,
                alignItems: "center"
              }}
            >
              <Image
                indicator={ActivityIndicator}
                indicatorProps={{
                  color: "rgba(150, 150, 150, 1)",
                  unfilledColor: "rgba(200, 200, 200, 0.2)"
                }}
                source={icon}
                style={{
                  top: height * 0.05,
                  height: 100,
                  width: 80
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  top: height * 0.04,
                  color: "white",
                  textAlignVertical: "center",
                  marginLeft: width * 0.01
                }}
              >
                Connect to TMDb
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                Actions.Launch();
              }}
            >
              <Icon name="film" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                Actions.TVShows();
              }}
            >
              <Icon name="tv" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Tv Shows</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                Actions.discoverMovies();
              }}
            >
              <Icon name="search" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Discover</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.breakitems}
              onPress={() => {
                Actions.popularPeople();
              }}
            >
              <Icon name="user" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Popular People</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.breakitems}
              onPress={() => {
                DismissKeyboard();
              }}
            >
              <Icon name="bell" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Reminders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                DismissKeyboard();
              }}
            >
              <Icon name="question-circle" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Contact Developer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                DismissKeyboard();
              }}
            >
              <Icon name="google-plus" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Google+ Community</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                DismissKeyboard();
              }}
            >
              <Icon name="unlock-alt" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Unlock Pro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidemenuitems}
              onPress={() => {
                DismissKeyboard();
              }}
            >
              <Icon name="cog" size={20} color="#BDC3C7" />
              <Text style={styles.sidemenuText}>Setting</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      );
    else
      return (
        <View style={styles.container}>
          <View
            style={{
              flex: 0.08,
              alignItems: "center",
              flexDirection: "row",
              backgroundColor: "#333435"
            }}
          >
            <View style={{ margin: 10, flex: 0.7 }}>
              <Text style={{ textAlign: "left", fontSize: 20, color: "#fff" }}>
                Filter
              </Text>
            </View>
            <TouchableOpacity
              style={{ margin: 10, flex: 0.3 }}
              onPress={() => {
                this.props.applyFilter(
                  this.state.selectedGenre,
                  this.state.from,
                  this.state.to
                );
              }}
            >
              <Text style={{ textAlign: "right", fontSize: 16, color: "#fff" }}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.92,
              flexDirection: "column",
              backgroundColor: "#fff"
            }}
          >
            <View style={{ backgroundColor: "#BDC3C7" }}>
              <Text>Year Range</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 0.5 }}>
                <Dropdown
                  value={this.state.from}
                  data={this.getYears()}
                  onChangeText={selected => {
                    this.setState({ from: selected });
                  }}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <Dropdown
                  value={this.state.to}
                  data={this.getYears()}
                  onChangeText={selected => {
                    if (this.state.from < this.state.to)
                      this.setState({ to: selected });
                    else this.setState({ to: this.state.from });
                  }}
                />
              </View>
            </View>
            <View style={{ backgroundColor: "#BDC3C7" }}>
              <Text>Genres</Text>
            </View>
            <Dropdown
              label="ALL"
              data={this.props.genres}
              onChangeText={selected =>
                this.props.genres.forEach(item => {
                  if (item.value == selected)
                    this.setState({ selectedGenre: item.id });
                })
              }
            />
          </View>
        </View>
      );
  }
}
mapStateToProps = (state, props) => {
  return {
    drawerPosition: state.launchReducer.position,
    genres: state.launchReducer.genres
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
