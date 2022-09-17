import { useContext, useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

function ManageExpenses({ route, navigation, style }) {
  //n1 (*)(2) To trigger it, we need to get access to context. That means that in managed expense we can again use the context hook provided by React and therefore imported from React. And we pass our expenses context to this hook to tap into this context:
  // useContext(ExpensesContext);
  //n1 Then we can store this in a constant or variable And we can then use this context or example, here in the lead expense handler. In there, on the expenses context, we can call delete expense. Maybe do that before going back  though it doesn't matter here because this runs synchronously anyways but still I'll swap this.(*)(3)
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;// drilling into an object which might be undefined // using '?' inline and rendering the UI accordingly:
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);
  //n1(*)(0)  Now let's start with delete expense handler.   There I wanna trigger that delete expense function that I had defined in my context. I want to trigger this function.(*)(1)
  function deleteExpenseHandler() {
    //n1 (*)(3)But most importantly, to delete expense, we should pass the ID of the expense that should be deleted.  
    expensesCtx.deleteExpense(editedExpenseId); // delete the expense from the store
    navigation.goBack(); // go back to the previous screen
  }

  function cancelHandler() {
    navigation.goBack(); // go back to the previous screen
  }

  function confirmHandler() {
    //n2 (*)(0) UPDATING AND ADDING For that we have  confirmHandler function which is triggered whenever this button the update or add button:
    // <Button style={styles.button} onPress={confirmHandler}>
    //   {isEditing ? 'Update' : 'Add'}
    // </Button>
    //n2 depending on which mode we are, will be tapped. So, this function is executed when that button is tapped.
    //n2 FIRST check the value in our is editing constant above:
    //   const isEditing = !!editedExpenseId;
    //n2 We wanna check if we are editing in which case we wanna call expenses context, updateExpense();. Else if we are not editing, then we are adding. Then we want to call expense context addExpense();
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, {description: 'Testing updateExpense', amount: 139.99, date: new Date('2022-07-09')});
    } else {
      expensesCtx.addExpense({description: 'Testing addExpense', amount: 39.99, date: new Date('2022-07-10')});
    }
    //n2 Either way thereafter, we want to go back and close the model. 
    navigation.goBack(); // go back to the previous screen
  }

  //n2 Of course, we need to pass some data to update and add expense. For the moment is set up some dummy object 
  // And we also have to provide the ID here because in the context you might recall that in case of updating:
  // function updateExpense(id, expenseData) {
  // the first parameter we receive is actually the ID of the expense that should be updated.
  //n2 So, therefore now here in update expense and manage expense we pass the ID to be precise the added expense ID as a first value. So, now we should also be able to confirm this model. If we save this now, if I added another book here by clicking on it and click update you see it was overwritten with test and that test amount. If I add a new expense by clicking add here we see this expense here as well. It's in the recent expenses here because in my case this is actually in the future and therefore it is of course greater than that date seven days ago. If you wanted to rule out that you can get dates in the future, typically, you would probably not enter expenses in the future but if you would want to rule that out you can update your return expression here in this filter function and make sure that you return true if expense date is great later than date seven days ago and expense date also is smaller or equal than today. Here you also might wanna use greater or equal to include that date seven days ago depending on how you define seven days ago. With that, that would be gone from the recent dates but we would have it here in all expenses. So, that is also working now. And of course we can still delete all those expenses if we want to, update them as I showed you and add new expenses whenever we want. So, therefore this is looking pretty good. We are of course, missing those actual inputs but we will add them soon. For this section we are almost done. And I just wanna make sure that we have some fallback text in case that we have no expenses. And I also wanna make sure that the status bar here isn't black because that's a bit hard to see.

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}

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
  buttons: {
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
