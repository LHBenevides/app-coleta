import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  titulo: {
    fontSize: 15,
    marginBottom: 20,
    marginTop: 10,
    textTransform: "uppercase",
    color: "#003275",
  },
  texto: {
    color: "#282b2db5",
    fontSize: 14,
    marginBottom: 5
  },
  buttonDetails: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003275",
    borderRadius: 50,
    marginTop: 300,
    marginLeft: "auto",
    marginRight: "auto",
    
  },
  iconButton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }

});

export default styles