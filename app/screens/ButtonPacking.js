import React from "react";
import { StyleSheet, Text, TouchableOpacity,Image } from "react-native";
import colors from "../config/colors";
import ListingEditScreen from "./ListingEditScreen";


function AppButton({ title, onPress, color = "blue" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      component={ListingEditScreen}
    >
      
      <Image style={styles.logo} source={require("../assets/preview.png")} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.muang,
    borderRadius: 150,
    marginTop:70,
    justifyContent: "center",
    alignItems: "center",
    padding: 29,
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
