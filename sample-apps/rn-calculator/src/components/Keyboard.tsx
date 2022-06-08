import * as React from "react";
import { View, Text } from "react-native";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";


export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [solution, setSolution] = React.useState<Number | null>(null);


  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setSolution(null);
  };

  // Handlers;
  const numPressHandler = (buttonValue: string) => {

  };

  const opPressHandler = (buttonValue: string) => {

  };

  const getSolution = () => {
    // switch case
  };

  return (
    <View style={Styles.bottomView}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={{ color: "gray", width: "80%", fontSize: 20, fontWeight: '900' }}>😎</Text>
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => opPressHandler("+/-")} />
        <Button title="％" isGray onPress={() => opPressHandler("％")} />
        <Button title="÷" isBlue onPress={() => opPressHandler("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => numPressHandler("7")} />
        <Button title="8" onPress={() => numPressHandler("8")} />
        <Button title="9" onPress={() => numPressHandler("9")} />
        <Button title="×" isBlue onPress={() => opPressHandler("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => numPressHandler("4")} />
        <Button title="5" onPress={() => numPressHandler("5")} />
        <Button title="6" onPress={() => numPressHandler("6")} />
        <Button title="-" isBlue onPress={() => opPressHandler("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => numPressHandler("1")} />
        <Button title="2" onPress={() => numPressHandler("2")} />
        <Button title="3" onPress={() => numPressHandler("3")} />
        <Button title="+" isBlue onPress={() => opPressHandler("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => numPressHandler(".")} />
        <Button title="0" onPress={() => numPressHandler("0")} />
        <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
        <Button title="=" isBlue onPress={() => getSolution()} />
      </View>

    </View>
  );
}
