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
    backgroundColor: 'black',
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    
},

smTxtLight: {
    fontSize: 32,
    color: globalColors.white,

    padding:'25%',
},
smTxtDark: {
    fontSize: 32,
    color: globalColors.black,
    padding:'25%',
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
    fontSize: 35,
    color: globalColors.solution,
    fontWeight: '400',
    alignSelf: "flex-end",
},
screenSecondNum: {
    fontSize: 35,
    color: globalColors.solution2,
    fontWeight: '400',
    alignSelf: "flex-end",
},
outputScreen : {
  backgroundColor: "#444444"
}
})