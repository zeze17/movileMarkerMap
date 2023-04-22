import React from "react";
import { FlatList, Text, View, Button, StyleSheet, Dimensions } from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="cerrar" onPress={closeModal} style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 15,
    width: "100%",
  },
  list: {
    height: Dimensions.get("window").height - 250,
    width: Dimensions.get("window").width,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
    color: "green",
    alignItems: "center",
    textAlign: "center",
    
  },
});
   
