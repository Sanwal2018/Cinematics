import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, Scene, Router, ActionConst, Drawer, Overlay, Modal } from 'react-native-router-flux';
import LAUNCH from './components/launch';
import Search from './components/search';
import TVShows from './components/tvShowsBar';
import sidebarComponent from './components/sidebar'
// import Home from './components/home'
import icon from './img/icon.png';
import styles from './components/styles';
import movieDetails from './components/movieDetails';
import tvDetails from './components/tvDetails';
import Menu from './components/menuComponent';
import People from './components/popular/popularPeople';
export default class MyRouter extends Component {
      constructor(props) {
            super(props)
      }

      render() {
            return (
                  <Router navigationBarStyle={styles.navBar}
                        titleStyle={styles.navBarTitle}
                        barButtonTextStyle={styles.barButtonTextStyle}
                        barButtonIconStyle={styles.barButtonIconStyle}>
                        <Stack key="root" hideNavBar hideTabBar>

                              <Drawer
                                    hideNavBar
                                    key="drawer"
                                    contentComponent={sidebarComponent}
                                    drawerImage={icon}
                                    drawerWidth={230}
                                    title="Cinematics"
                              >
                                    <Scene key="Launch" component={LAUNCH} title="Cinematics" hideTabBar hideNavBar initial />
                                    <Scene key="TVShows" component={TVShows} title="Cinematics" hideTabBar hideNavBar />
                                    <Scene key="movieDetails" component={movieDetails} title="Movie Details" hideNavBar hideTabBar />
                                    <Scene key="tvDetails" component={tvDetails} title="TV Show Details" hideNavBar hideTabBar />
                                    <Scene key="Search" component={Search} title="Cinematics" hideTabBar hideNavBar />
                                    <Scene key="popularPeople" component={People} title="Popular People" hideTabBar hideNavBar />
                              </Drawer>
                        </Stack>
                  </Router>
            )
      }
}
