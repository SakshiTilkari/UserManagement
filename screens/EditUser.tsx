import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useDataset } from "../context/DatasetContext"; 
import * as Animatable from "react-native-animatable";  

const EditUser = ({ route, navigation }) => {
  const { userData } = route.params || {}; 
  const isEditMode = userData != null; 
  const { dataset, updateDataset } = useDataset(); 

  const [name, setName] = useState(isEditMode ? userData.name : "");
  const [phoneNo, setPhoneNo] = useState(isEditMode ? userData.phoneNo : "");
  const [emailId, setEmailId] = useState(isEditMode ? userData.emailId : "");
  const [type, setType] = useState(isEditMode ? userData.type : "");
  const [location, setLocation] = useState(isEditMode ? userData.location : "");
  const [functionType, setFunctionType] = useState(isEditMode ? userData.function : "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isEditMode) {
      setName("");
      setPhoneNo("");
      setEmailId("");
      setType("");
      setLocation("");
      setFunctionType("");
    }
  }, [isEditMode]);

  const handleSave = () => {
    if (!name || !phoneNo || !emailId || !type || !location || !functionType) {
      setError("All fields must be filled out.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNo)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    const user = { name, phoneNo, emailId, type, location, function: functionType };
    
    if (isEditMode) {
      const updatedDataset = dataset.map((item) =>
        item.emailId === userData.emailId ? { ...item, ...user } : item
      );
      updateDataset(updatedDataset);
      console.log("Updated User:", user);
    } else {
      const newUser = { ...user, emailId: Date.now().toString() }; 
      updateDataset([...dataset, newUser]);
      console.log("New User Created:", newUser);
    }

    navigation.goBack(); 
  };

  const hasValue = (value) => value !== "";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isEditMode ? "Edit User" : "Add User"}</Text>
      {error && <Text style={styles.errorText}>{error}</Text>} 

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(name) || name ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, name && { top: -27 }]} 
        >
          Name
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(phoneNo) || phoneNo ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, phoneNo && { top: -27 }]} 
        >
          Phone Number
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={phoneNo}
          onChangeText={setPhoneNo}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(emailId) || emailId ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, emailId && { top: -27 }]} 
        >
          Email
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={emailId}
          onChangeText={setEmailId}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(type) || type ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, type && { top: -27 }]} 
        >
          Type
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={type}
          onChangeText={setType}
        />
      </View>

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(location) || location ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, location && { top: -27 }]} 
        >
          Location
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.inputContainer}>
        <Animatable.Text
          animation={hasValue(functionType) || functionType ? "fadeInUp" : ""}
          duration={300}
          style={[styles.floatingLabel, functionType && { top: -27 }]} 
        >
          Function
        </Animatable.Text>
        <TextInput
          style={styles.input}
          value={functionType}
          onChangeText={setFunctionType}
        />
      </View>

      <Button 
        title={isEditMode ? "Save Changes" : "Add User"} 
        onPress={handleSave}
        color="#00796b"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  header: {
    fontSize: 28,
    color: '#00796b',
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    marginTop: '10%'
  },
  inputContainer: {
    marginTop: '4.5%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#00796b",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 20,
  },
  floatingLabel: {
    position: "absolute",
    top: 13,
    left: 4,
    fontSize: 18,
    color: "#00796b",
    backgroundColor: "#ffffff",
    paddingHorizontal: 5,
    transition: "top 0.3s, font-size 0.3s",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default EditUser;
