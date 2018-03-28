import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  View,
  ScrollView,
  BackgroundImage,
  TextInput,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as myActions from "../../actions/discoverActions";
import DismissKeyboard from "react-native-dismiss-keyboard";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styles from "../styles";
import icon from "../../img/TMDb.png";
var { height, width } = Dimensions.get("window");
import Modal from "react-native-modal";
export default class MyModal extends Component {
  constructor(props) {
    super(props);
    this.state={
      isVisible:false,
    }
  }
  componentWillReceiveProps=nextProps=>{
    this.setState({isVisible:nextProps.isFilterVisible})
  }
  render() {
    return (
      <Modal
      isVisible={this.state.isVisible}
      onBackdropPress={() =>
        this.setState({ isVisible: false })
      }
    >
      <View
        style={styles.drawerModal}
      >
        <View style={{width:300, backgroundColor:"#fff"}} >
        <Text>Hello</Text>
        </View>
      </View>
    </Modal>
    )
  }
}