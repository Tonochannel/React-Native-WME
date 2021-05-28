import React from "react";
import { StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import colors from "../config/colors";


function AppButton({ title, onPress, color = "lightseagreen" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Image style={styles.logo} source={require("../assets/preview.png")} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightseagreen,
    borderRadius: 110,
    marginTop:110,
    justifyContent: "center",
    alignItems: "center",
    padding:29,
    width: 140,
  
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom:1,
  },
});

export default AppButton;
