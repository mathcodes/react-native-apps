import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';

import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

function ManageExpenses({ route, navigation, style}) {
  // drilling into an object which might be undefined
  // using '?' inline and rendering the UI accordingly:
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log('Delete expense!');
  }

  function cancelHandler() { }

  function confirmHandler() { }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>Update</Button>
      </View>
      <View style={styles.deleteContainer}>
        {isEditing && (

          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />

        )}
      </View>
    </View>
  )
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800
  },
  buttons:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    color: GlobalStyles.colors.primary200,
    alignItems: 'center'
  }
});
