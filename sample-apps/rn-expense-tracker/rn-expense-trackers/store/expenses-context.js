import { createContext } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Guitar Picks',
    amount: 54.99,
    date: new Date('2021-06-09')
  },
  {
    id: 'e2',
    description: 'Fender Amp',
    amount: 435.99,
    date: new Date('2021-08-22')
  },
  {
    id: 'e3',
    description: 'Guitar Strap',
    amount: 12.99,
    date: new Date('2022-02-09')
  },
  {
    id: 'e4',
    description: 'Guitar Shirt',
    amount: 22.99,
    date: new Date('2022-12-09')
  },
  {
    id: 'e5',
    description: 'Guitar Magazine',
    amount: 2.99,
    date: new Date('2022-11-19')
  }
]


export const ExpensesContext = createContext({// create a context object with uppercase character as it will be a Component
  expenses: [],
  addExpense: ({ description, amount, date }) => { }, // addExpense is a function
  deleteExpense: (id) => { }, // id is the id of the expense
  updateExpense: (id, { description, amount, date }) => { }, // updateExpense is a function that takes an id and an object
});


// When this executes a second time, we will have loaded the DUMMY_EXPENSES array into our current state, and therefore we know it will be an array of objects of which we can pull out the existing elements and merge them into a new array.
function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString(); // generate a random id by combining the date and a random number
      return [{ ...action.payload, id: id }, ...state]
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex]; // Because now we can get the updateableExpense itself by using state and then access this updateableExpenseIndex. 
      // We can then create our updatedItem here by generating a new item to update it in an immutable way, where we spread all our updateableExpense properties, so of this object that we got from the original array. And where we then also merge in our action.payload.data properties,
      const updatedItem = { ...updatableExpense, ...action.payload.data }; // So we merge the dated description, amount, and date into this object, and we will therefore override the existing values for description, amount, and date.
      const updatedExpenses = [...state]; // We create a new array of expenses, and we copy all the expenses from the original array, and we then replace the updatedExpenseIndex with the updatedItem.
      updatedExpenses[updatableExpenseIndex] = updatedItem; // We replace the updatedExpenseIndex with the updatedItem. And therefore, then thereafter we can return this updatedExpenses array. So now that's a new array based on the old array with one item updated.

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);//
    default:
      return state;
  }
}

// HERE WE ARE dispatching different actions and these different actions will lead to different state changes inside of expensesReducer.
// The job of the reducer is to take the current state and an action and return a new state value, either the existing state or a new state when we make it into one of the cases we created.
function ExpensesContextProvider({ children }) { // children is the component that is being wrapped
  // expensesState is being managed by this reducer and is now made available to the component that is being wrapped
  // And the second element -  dispatch a new action to the reducer function - manipulate the state 
  // - which we then get as a new state in this component function, which will be reevaluated if the state changes automatically all thanks to React and this hook.
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES); // useReducer is a hook that takes a reducer and returns an array of two elements. the second parameter is the initial state.    

  // note we are NOT using object desctructuring, instead the parameter itself should be named expenseData.

  // SO HERE WE ARE forwarding the incoming expense data to our reducer function by dispatching this action.
  function addExpense(expenseData) {
    dispatch({
      type: 'ADD', // the action passed into expenseReducer is the type of the action
      payload: expenseData,
    });
  }

  function deleteExpense(id) {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: 'UPDATE',
      payload: { id: id, data: expenseData },
    });
  }



  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>// children is the component that is being wrapped
}

export default ExpensesContextProvider;
