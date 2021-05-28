import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import Button from "../components/Button";
import routes from "../navigation/routes";
import ButtonCount from "../screens/ButtonCount";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
      <ButtonCount title="WME"  />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 20,
  },
  button1: {
    backgroundColor: colors.muang,
    color: colors.white,
    fontSize: 20,
    fontWeight: "300",
    paddingRight: 60,
    paddingLeft:60,
    paddingTop:5,
    paddingBottom: 5,
    borderRadius: 25,

  },
});

export default WelcomeScreen;
