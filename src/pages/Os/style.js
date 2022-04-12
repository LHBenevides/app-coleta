import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  coleta: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },
  titulo: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: 10,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#282b2db5"
  },
  deleteColeta: {
    justifyContent: "center",
    paddingLeft: 15
  },
  descriptionColeta: {
    width: "75%",
    alignContent: "flex-start",
    // backgroundColor: "#f5f5f5",
    backgroundColor: "#003275",
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 15,
    marginRight: 40,
    // color: "#282b2db5",
    color: "#fff",
    fontSize: 14
  },
  buttonNovaColeta: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#003275",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  iconButton: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
});

export default styles

