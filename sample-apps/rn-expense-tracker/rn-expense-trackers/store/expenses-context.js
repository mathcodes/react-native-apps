import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Guitar Picks',
    amount: 54.99,
    date: new Date('2022-06-09')
  },
  {
    id: 'e2',
    description: 'Fender Amp',
    amount: 435.99,
    date: new Date('2022-07-10')
  },
  {
    id: 'e3',
    description: 'Guitar Strap',
    amount: 12.99,
    date: new Date('2022-07-09')
  },
  {
    id: 'e4',
    description: 'Guitar Shirt',
    amount: 22.99,
    date: new Date('2022-07-09')
  },
  {
    id: 'e5',
    description: 'Guitar Magazine',
    amount: 2.99,
    date: new Date('2022-07-13')
  }
]


export const ExpensesContext = createContext({// create a context object with uppercase character as it will be a Component
  expenses: [], // expenses is the key and the value is an empty array
  addExpense: ({ description, amount, date }) => { }, // addExpense is a function
  deleteExpense: (id) => { }, //  deleteExpense is a function
  updateExpense: (id, { description, amount, date }) => { }, // updateExpense is a function that takes an id and an object
});


// When this executes a second time, we will have loaded the DUMMY_EXPENSES array into our current state, and therefore we know it will be an array of objects of which we can pull out the existing elements and merge them into a new array.
function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString(); // generate a random id by concatenating the date as a string and a random number also a string
      return [{ ...action.payload, id: id }, ...state] // we are using a new object in a new array, and we are adding the id to the new object in an immutable way.
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id // I wanna return true. If the id of the expense we're currently looking at in this array of expenses is equal to my action.payload.id.
        // I know that I can look into action.payload.id because I know that in the update case I will have dispatched an action with a payload that is an object that has an ID.
      );
      // This gives us the index of the expense that we want to update instead of the item itself to again update everything immutably.
      const updatableExpense = state[updatableExpenseIndex]; // Because now we can get the updateableExpense itself by using state and then access this updateableExpenseIndex. 
      // We can then create our updatedItem here by generating a new item to update it in an immutable way, where we spread all our updateableExpense properties, so of this object that we got from the original array. And where we then also merge in our action.payload.data properties,so all the updated properties for the expense
      // Because the data we're setting here is the expenseData we received here:
      // `function updateExpense(id, expenseData) {`
      // as a second argument in updateExpense, which should be an object with a `description, amount, and date`
      const updatedItem = { ...updatableExpense, ...action.payload.data }; // So we merge the updated description, amount, and date into this object, and we will therefore override the existing values for description, amount, and date. We will keep the existing id.
      const updatedExpenses = [...state]; // We create a new array of expenses, and we copy all the expenses from the original array, and we then replace the updatedExpenseIndex with the updatedItem.
      updatedExpenses[updatableExpenseIndex] = updatedItem; // We replace the updatedExpenseIndex with the updatedItem. And therefore, then thereafter we can return this updatedExpenses array. So now that's a new array based on the old array with one item updated.
      return updatedExpenses; // We return this updatedExpenses array.


    // For this, we can pass in this arrow function which gets the expense automatically. And we wanna return true for all the items where the ID is not equal to action.payload, because if it is equal that's the item we wanna delete, and in that case, we wanna return false to drop that item.
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
// BLOCK SUMMARY:
// In the ExpensesContextProvider component here, we added all these functions which dispatch our actions. Now we also need to construct a value object here, which bundles all our data and these functions together, to expose them to all the interested components, through that provider component down there:
// return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>// children is the component that is being wrapped

// HERE WE ARE dispatching different actions and these different actions will lead to different state changes inside of expensesReducer.
// The job of the reducer is to take the current state and an action and return a new state value, either the existing state or a new state when we make it into one of the cases we created.
function ExpensesContextProvider({ children }) { // children is the component that is being wrapped
  // expensesState is being managed by this reducer and is now made available to the component that is being wrapped
  // And the second element -  dispatch a new action to the reducer function - manipulate the state 
  // - which we then get as a new state in this component function, which will be reevaluated if the state changes automatically all thanks to React and this hook.
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES); // useReducer is a hook that takes a reducer and returns an array of two elements. The first element/parameter is our expensesState (the state that will be managed by our reducer now made available in this component function. The second element/parameter will be a dipatch function which we can execute to dispatch a new action to the reducer function which will manipulate the state and give us a new state which will be reevaluated if the state changes automatically.
  
  // This const [expensesState, dispatch] is now available to the component that is being wrapped and is set to the useReducer hook where we pass in the expensesReducer function and the DUMMY_EXPENSES array. THIS IS HOW WE KNOW THE UPDATED STATE WILL STILL BE AN ARRAY

  // note we are NOT using object desctructuring, instead the parameter itself should be named expenseData.

  // SO HERE WE ARE forwarding the incoming expense data to our reducer function by dispatching this action.
  function addExpense(expenseData) {
    dispatch({ // here we call dispatch, a function that takes an action object as an argument:
      type: 'ADD', // the action passed into expenseReducer is the type of the action
      payload: expenseData, // the payload is the data that we want to pass into the reducer function. We also forward the expenseData object that we are passing in (without object destructuring)
    });
  }
  //n1 I want to trigger this function.(*)(1)-(*)(2)
  function deleteExpense(id) {
    dispatch({
      type: 'DELETE',
      payload: id,
    });
  }

  function updateExpense(id, expenseData) {
    dispatch({
      type: 'UPDATE',
      payload: { id: id, data: expenseData }, // here we are passing in an object with an id and an object of expenseData
    });
  }

  const value = {
    expenses: expensesState,// a expenses key and point at my expensesState which is returned by useReducer, and which is recreated whenever action is dispatched,
    addExpense: addExpense, // then add the addExpense function, and point at the addExpense function here, so the right side of the colon is referring to the different functions we defined above, and therefore I also added deleteExpense function here and point at deleteExpense and add an updateExpense method and point at updateExpense.
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  }
// NOW, TO MAKE THIS value AVAILABLE TO ALL COMPONENTS, WE SET THE value prop on this Context Provider component down there, and setting this equal to this value directly above. Now this custom provider component:
// `function ExpensesContextProvider({ children }) {`
// can be wrapped around all the components that are interested in this context.
  return <ExpensesContext.Provider value={value} >{children}</ExpensesContext.Provider>// children is the component that is being wrapped
}

export default ExpensesContextProvider;

// Now this custom provider component can be wrapped around all the components that are interested in this context. 
