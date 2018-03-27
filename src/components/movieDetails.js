import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList
} from "react-native";
import { Actions } from "react-native-router-flux";
import Image from "react-native-image-progress";
import * as myActions from "../actions/";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
var { height, width } = Dimensions.get("window");
import styles from "./styles";
import Carousel from "react-native-smart-carousel";
import ScrollableTabView, {
  ScrollableTabBar
} from "react-native-scrollable-tab-view";
const imgPath = "https://image.tmdb.org/t/p/w500/";
import Info from "./detailsTab/info";
import Cast from "./detailsTab/cast";
import Review from "./detailsTab/review";
class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      type: "movie",
      sliderImages: [],
      tabCustomTitle: "",
      info: [],
      cast: [],
      review: []
    };
  }
  componentWillReceiveProps = nextProps => {
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
      this.setState({
        review: nextProps.review,
        loading: !this.state.loading
      });
    }
  };

  componentDidMount = () => {
    this.props.sliderData(this.props.movie.id);
    this.props.getDetailedInfo(this.props.movie.id);
    this.props.getCasts(this.props.movie.id);
    this.props.getReview(this.props.movie.id);
  };

  render() {
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
          <View style={styles.detailsparentView}>
            <View style={{ margin: 10, flex: 0.1 }}>
              <TouchableOpacity
                onPress={() => {
                  Actions.pop();
                }}
              >
                <Icon
                  name="arrow-left"
                  size={20}
                  color="#fff"
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ margin: 10, flex: 0.7 }}>
              <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                {" "}
                {this.state.tabCustomTitle
                  ? this.state.tabCustomTitle
                  : ""}{" "}
              </Text>
            </View>
            <View style={styles.detailsTopNav}>
              <TouchableOpacity>
                <Icon
                  name="home"
                  size={20}
                  color="#fff"
                  style={{ padding: 5 }}
                  onPress={() => {
                    Actions.Launch();
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="share-alt"
                  size={20}
                  color="#fff"
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="ellipsis-v"
                  size={20}
                  color="#fff"
                  style={{ padding: 5 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.caraosulContainer}>
            <View style={{ flex: 0.6 }}>
              <Carousel
                data={this.props.sliderImages}
                autoStart={true}
                playTime={1000}
                height={height * 0.27}
                width={width}
                navigation={true}
                navigationType="dots"
                navigationColor="#fff"
                style={{ resizeMode: "stretch" }}
              />
            </View>
            <View style={styles.detailsTopContentTopConWrap}>
              <View style={styles.detailsTopContent}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.adultIndicator}>
                    {" "}
                    {this.props.movie.adult ? 18 : "N/A"}{" "}
                  </Text>
                  <Icon
                    name="circle"
                    size={8}
                    color="#6C7A89"
                    style={{ padding: 5 }}
                  />
                  <Text style={styles.detailsContent}>
                    {" "}
                    {new Date(this.props.movie.release_date).getFullYear()}{" "}
                  </Text>
                  <Icon
                    name="circle"
                    size={8}
                    color="#6C7A89"
                    style={{ padding: 5 }}
                  />
                  <Text style={styles.detailsContent}>
                    {" "}
                    {Math.floor(this.props.info.runtime / 60)} hr{" "}
                    {this.props.info.runtime % 60} mins
                  </Text>
                </View>
                <View>
                  <Text
                    style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}
                  >
                    {" "}
                    {this.props.movie.title}{" "}
                  </Text>
                </View>
                <View>
                  {this.props.info && this.props.info.genres ? (
                    <FlatList
                      numColumns={4}
                      scrollEnabled={true}
                      data={this.props.info.genres}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({ item, index }) => {
                        return (
                          <View>
                            <Text style={{ color: "#6C7A89" }}>
                              {" "}
                              {item.name}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  ) : null}
                </View>
              </View>
            </View>
            <Image
              indicator={ActivityIndicator}
              indicatorProps={{
                color: "rgba(150, 150, 150, 1)",
                unfilledColor: "rgba(200, 200, 200, 0.2)"
              }}
              source={{ uri: imgPath + this.props.movie.poster_path }}
              style={{
                width: width * 0.2,
                height: height * 0.18,
                position: "absolute",
                zIndex: 999,
                marginTop: height * 0.23,
                marginLeft: width * 0.05
              }}
            />
          </View>

          <ScrollableTabView
            tabBarBackgroundColor="#6C7A89"
            tabBarActiveTextColor="#fff"
            tabBarInactiveTextColor="#BDC3C7"
            tabBarTextStyle={{ fontFamily: "Arial", fontSize: 12 }}
            tabBarUnderlineStyle={{ backgroundColor: "#3FC380" }}
            renderTabBar={() => <ScrollableTabBar />}
          >
            <Info
              tabLabel="INFO"
              data={{
                info: this.props.info,
                cast: this.props.cast,
                review: this.props.review,
                type: this.state.type
              }}
            />
            <Cast
              tabLabel="CAST"
              data={{
                info: this.props.info,
                cast: this.props.cast,
                review: this.props.review,
                type: this.state.type
              }}
            />
            <Review
              tabLabel="REVIEW"
              data={{
                info: this.props.info,
                cast: this.props.cast,
                review: this.props.review,
                type: this.state.type
              }}
            />
          </ScrollableTabView>
        </View>
      );
    }
  }
}
mapStateToProps = (state, props) => {
  return {
    sliderImages: state.searchReducer.data,
    info: state.detailReducer.data,
    cast: state.castReducer.data,
    review: state.reviewReducer.data
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
