import React from "react";
import { View, StyleSheet,TouchableHighlight } from "react-native";
import ButtonCount from "./ButtonCount";
import ButtonPacking from "./ButtonPacking";
import routes from "../navigation/routes";




function ListingScreen({navigation}) {
  return (
    <View style={styles.container}>
      
      <ButtonCount  title="Count Stock" onPress={() => navigation.navigate(routes.ListingEditScreen)}/>
     
      <ButtonPacking title="Packing" />
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
 
});

export default ListingScreen;
