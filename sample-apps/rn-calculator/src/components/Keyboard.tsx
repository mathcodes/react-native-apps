import * as React from "react";
import { View, Text } from "react-native";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";


export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null >(null);


  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };

  // Handlers;
  const numPressHandler = (buttonValue: string) => {

  };

  const opPressHandler = (buttonValue: string) => {

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
        <Button title="b1" />
        <Button title="b2" />
        <Button title="b3" />
        <Button title="b4" />
      </View>
      <View style={Styles.row}>
        <Button title="b1" />
        <Button title="b2" />
        <Button title="b3" />
        <Button title="b4" />
      </View>
      <View style={Styles.row}>
        <Button title="b1" />
        <Button title="b2" />
        <Button title="b3" />
        <Button title="b4" />
      </View>
    </View>
  );
}
