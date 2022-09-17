// create a couple of helper functions that help with sending requests.
import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post('https://react-native-6a4d4-default-rtdb.firebaseio.com/expenses.json', 
  expenseData 
  );
}