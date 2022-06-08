import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { globalColors } from "../styles/colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [solution, setSolution] = React.useState<Number | null >(null);

  const numPressHandler = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const opPressHandler = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setSolution(null);
  };

  const firstNumberDisplay = () => {
    if (solution !== null) {
        return <Text style={solution < 99999 ? [Styles.screenFirstNum, {color: globalColors.solution}] : [Styles.screenFirstNum, {fontSize: 50, color: globalColors.solution}]}>{solution?.toString()}</Text>; 
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNum}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstNum}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNum, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNum, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getSolution = () => {
      switch (operation) {
        case "+":
            clear();
            setSolution(parseInt(secondNumber) + parseInt(firstNumber));
            break;
        case "-":
            clear();
            setSolution(parseInt(secondNumber) - parseInt(firstNumber));
            break;
        case "*":
            clear();
            setSolution(parseInt(secondNumber) * parseInt(firstNumber));
            break;
        case "/":
            clear();
            setSolution(parseInt(secondNumber) / parseInt(firstNumber));
            break;
        default:
            clear();
            setSolution(0);
            break;
        }
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
        <Text style={Styles.screenSecondNum}>
          {secondNumber}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
        </Text>
        {firstNumberDisplay()}
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
        <Button title="×" isBlue onPress={() => opPressHandler("×")} />
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
