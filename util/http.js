// create a couple of helper functions that help with sending requests.
import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post('https://react-native-6a4d4-default-rtdb.firebaseio.com/expenses.json',  // Fire base just wants this .json at the end here to understand that we're targeting a specific node in the database. So to say.
  expenseData 
  );
  