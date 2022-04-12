import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 300,
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: "#003275",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#003275",
    fontSize: 16
  },
  buttonColetaDisabled: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#808080",
    borderRadius: 50,
    marginTop: 15
  },
  buttonColeta: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#003275",
    borderRadius: 50,
    marginBottom: 15,
  },
  iconButtonColeta: {
    color: "#f5f5f5",
    fontSize: 15,
    fontWeight: "bold"
  },
});

export default styles