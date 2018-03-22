import { StyleSheet, Platform, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
export default StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#FFFFFF",
            padding: Platform.OS == 'ios' ? 20 : 0,
      },
      navBar: {
            backgroundColor: '#1b1b21',
      },
      navBarTitle: {
            color: '#FFFFFF'
      },
      barButtonTextStyle: {
            color: '#FFFFFF'
      },
      barButtonIconStyle: {
            tintColor: 'rgb(255,255,255)'
      }, sidemenumaindiv: {
            flex: 1,
            flexDirection: 'column'
      },
      sidemenuitems: {
            padding: 10,
            paddingBottom: 0,
            height: 50,
            flexDirection: 'row',
            alignItems: 'center'
      },
      sidemenuText: {
            fontSize: 16,
            textAlign: 'left',
            color: '#666',
            fontWeight: 'normal',
            marginLeft: 10
      },
      breakitems: {
            padding: 10,
            borderBottomColor: '#dadada',
            borderBottomWidth: 2,
            height: height * 0.1,
            flexDirection: 'row',
            alignItems: 'center'
      },
      infoText: { color: '#BDC3C7', textAlign: 'justify' },
      infoHeads: { color: '#000', textAlign: 'justify', fontWeight: 'bold' },
      infoTouchTab: { flexDirection: 'column', flex: 0.2, alignItems: 'center' },
      infoTouchTabText: { color: '#000', fontSize: 12 }
});
