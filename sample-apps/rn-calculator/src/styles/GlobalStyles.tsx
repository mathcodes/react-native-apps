import { StyleSheet } from "react-native";
import { globalColors } from "./colors"; 

export const Styles = StyleSheet.create({
  button: {
    width: 72,
    height: 72,
    borderRadius: 24
},
btnBlue: {
    backgroundColor: globalColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
},
btnLight: {
    backgroundColor: globalColors.white,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
},
btn2: {
    backgroundColor: globalColors.btn2,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
},
btn1: {
    backgroundColor: globalColors.btn1,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
},

smTxtLight: {
    fontSize: 32,
    color: globalColors.white,
},
smTxtDark: {
    fontSize: 32,
    color: globalColors.black,
},

row: {
    maxWidth: '100%',
    flexDirection: "row",
},
bottomView: {
    position: 'absolute',
    bottom: 50,
},
screenFirstNum: {
    fontSize: 96,
    color: globalColors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
},
screenSecondNum: {
    fontSize: 40,
    color: globalColors.gray,
    fontWeight: '200',
    alignSelf: "flex-end",
},
})