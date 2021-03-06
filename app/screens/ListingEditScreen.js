import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import * as Yup from "yup";
import Button from "../screens/Button";
import Button1 from "../screens/Button1";
import colors from "../config/colors";
import Button2 from "../screens/Button2";
import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert("Could not save the listing");
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {/* <FormImagePicker name="images" /> */}
        <View style={styles.alternativeLayoutButtonContainer}>
          <FormField
            maxLength={255}
            name="Barcode"
            placeholder="Barcode"
            width={230}
          />
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              title="SCAN"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </View>
        </View>
       
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="Description"
          placeholder="Description"
          width={320}
        />
        <View style={styles.alternativeLayoutButtonContainer}>
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="StockQty"
            placeholder="Stock Qty"
            width={220}
          />
          <FormField
            keyboardType="numeric"
            maxLength={8}
            name="EA"
            placeholder="EA"
            width={90}
          />
        </View>
      
        <View style={styles.alternativeLayoutButtonContainer}>
          <FormField
            maxLength={255}
            name="Count Qty"
            numberOfLines={1}
            placeholder="Count Qty"
            width={230}
          />
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              title="SCAN"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </View>
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <FormField
            maxLength={255}
            name="BIN"
            numberOfLines={1}
           
            placeholder="BIN"
            width={230}
          />
          <View style={styles.alternativeLayoutButtonContainer}>
            <Button
              title="SCAN"
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
          </View>
        </View>
       
        <View style={styles.ButtonContainer}>
          <Button1 title="UPDATE" />
          <Button2 title="CLEAR" />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  alternativeLayoutButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  ButtonContainer: {
    marginTop: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 10,
    width: 20,
    justifyContent: "space-between",
  },
  scrollView: {
    backgroundColor: colors.light,
    marginHorizontal: 1,
    marginTop: 5,
  },
  text: {
    padding: 3,
    fontSize: 15,
  },
});
export default ListingEditScreen;
