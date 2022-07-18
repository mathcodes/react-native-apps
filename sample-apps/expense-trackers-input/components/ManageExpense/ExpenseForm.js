import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Input from './Input';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

function ExpenseForm({ submitButtonLabel, onCancel, onSubmit, defaultValues }) {
  //2. Now for that, we can start with a couple of state slices by using useState, provided by React and by then registering state for the different input values. So here, we could then get our amountValue, for example.
  //2. Notice after || the '' because whenever you fetch an input value, you will get it as a string
  //4. Instead of using several slices of state to handle each input, we use a single slice and set the default to an object with one property for each input.
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  //3. One way to handle the input is to setup a handler for each input: call it amountChangedHandler, so set the amount value to the entered text which react native provides as we have connected the function to onChangeText. In other words, React Native will make sure that this parameter value is provided automatically, and this will be the amount or the value entered into the text input to which this function is connected.

  <Input
    style={styles.inputsRow}
    label="Amount"
    textInputConfig = {{
      keyboardType: 'decimal-pad',
      onChange: amountChangedHandler,
    }}
    //4. Here we use one handler to take care of the events for each of the three input using 2 parameters, one to identify the input and one to identify the value entered.
  function inputChangedHandler(inputIdentifier, enteredValue) {
    //4. in order to keep the current state we need to create a copy of the state in the setInputs function that returns a new object where we spread the current input values (curInputs), and also override the one value that we want to change (the one received) and we will be able to identify it using inputIdentifier.
    setInputs((curInputs) => {
      return {
        ...curInputs,
        //4. so we dynamically override the value of the input we want to change by using square brackets with inputIdentifier inside and then setting the enteredValue as the value for this dynamically accessed property.
        //4. NOTE - the value is no inputIdentifier, its the value stored in inputIdentifier (it changes based on the input)
        //4. RESULT: reusable dynamic generic function and we have one state object that manages ALL the input values. NOW WE NEED TO CONNECT THIS FUNCTION TO ALL THE INPUTS
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert('Invalid input', 'Please check your input values');
      setInputs((curInputs) => {
        return {
          amount: { value: curInputs.amount.value, isValid: amountIsValid },
          date: { value: curInputs.date.value, isValid: dateIsValid },
          description: {
            value: curInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid; 

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      {/* inputsRow has flexDirection=row to child components are next to each other BUT applied using rowInput instead to isolate these two View elements */}
      <View style={styles.inputsRow}> 
      //1. In order to use the input values, we will start in the input component where we accept the textInputConfig, which allows us in the ExpensForm component to add the onChangeText property, which allows us to connect the inputs to functions that will be executed whenever the entered values change.
      //5. LETS START HERE with the 'amount' input
        <Input
          style={styles.rowInput}
          label="Amount"
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: 'decimal-pad',
            //5. We have to implement our inputChangeHandler's parameter inputIdentifier as we made this up, its not part of react native. so using JS we can pre-configure a function for future execution using the bind method. We can execute this on a function and bind takes in a couple of arguments. FIRST: this (we are not working with this one), SECOND is the first argument received by our inputChangedHandler function. So we pass 'amount' to target the amount property from my state for this input
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
            // OR WE could use this syntax:
            // value: inputs["amount"]
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          invalid={!inputs.date.isValid}
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
          onChangeText: inputChangedHandler.bind(this, 'description'),
          value: inputs.description.value,
        }}
      />
      {formIsInvalid && ( // if form is invalid, show error message below
        <Text style={styles.errorText}>
          Invalid input values - please check your entered data!
        </Text>
      )}
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
