import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Header, MessagesHeader, MessageHeader } from "@coligo-lms/ui-mobile";
import { routes as routesConstants } from "../common/constants";
import Home from "../modules/home/screens/Home";
import Notifications from "../modules/notifications/screens/Notifications";
import Messages from "../modules/messages/screens/Messages";
import MessageDetails from "../modules/messages/screens/MessageDetails";

const headerBackground = require("../assets/images/header.png");

const routes = {
  [routesConstants.HOME]: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    })
  },
  [routesConstants.NOTIFICATIONS]: {
    screen: Notifications,
    navigationOptions: {
      header: props => (
        <Header title="Notifications" source={headerBackground} {...props} />
      )
    }
  },
  [routesConstants.MESSAGES]: {
    screen: Messages,
    navigationOptions: ({ navigation }) => ({
      header: props => (
        <MessagesHeader
          source={headerBackground}
          {...props}
          onTabChange={event => {
            navigation.state.params.onTabChange(event);
          }}
        />
      )
    })
  },
  [routesConstants.MESSAGE]: {
    screen: MessageDetails,
    navigationOptions: ({ navigation }) => ({
      header: props => (
        <MessageHeader
          source={headerBackground}
          {...props}
          title={navigation.state.params.message.coreMessage.subject}
          selectedTab={navigation.state.params.message.label}
          onClickButton={() => {
            navigation.state.params.deleteMessage();
          }}
        />
      )
    })
  }
};
const config = {
  initialRouteName: "Home",
  headerMode: "screen"
};

export default createStackNavigator(routes, config);
