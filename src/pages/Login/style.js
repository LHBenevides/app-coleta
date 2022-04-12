import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003275",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#fff",
    fontSize: 16
  },
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 50,
    marginTop: 15
  },
  buttonDisabled: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
    borderRadius: 50,
    marginTop: 15
  },
});

export default styles
