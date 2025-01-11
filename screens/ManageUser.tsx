import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DatasetContext from "../context/DatasetContext";

const ManageUser = () => {
  const navigation = useNavigation();
  const { dataset } = useContext(DatasetContext);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEdit = (item = null) => {
    navigation.navigate("EditUser", { userData: item });
  };

  // Filter dataset based on search query (email ID)
  const filteredDataset = dataset.filter((item) =>
    item.emailId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Manage Users</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => handleEdit()}>
          <Ionicons name="add-outline" size={25} color={"#ffffff"} />
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color={"#00796b"} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by email"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        {filteredDataset.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.listItem}
            onPress={() => handleEdit(item)}
          >
            <View style={styles.row}>
              <Ionicons name="person-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="call-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.phoneNo}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="mail-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.emailId}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="layers-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.type}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="location-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.location}</Text>
            </View>
            <View style={styles.row}>
              <Ionicons name="briefcase-outline" size={20} color={"#ffffff"} />
              <Text style={styles.text}>{item.function}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: '10%',
    marginBottom: '7%',
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00796b",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0f2f1",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: '1%',
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    fontSize: 19,
    color: "#00796b",
    marginLeft: 8,
  },
  scrollView: {
    paddingBottom: 20,
  },
  listItem: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: "#00796b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#e0f2f1",
    marginLeft: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00796b",  
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addButtonText: {
    marginLeft: 8, 
    fontSize: 16,
    color: "#ffffff",
  },
});

export default ManageUser;
