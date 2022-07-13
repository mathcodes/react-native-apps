import {useContext} from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import {getDateMinusDays} from './util/date'; 

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  
  // we only want to forward our recent expenses to the ExpensesOutput component
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7); // get date 7 days ago by passing today and 7 in as arguments

    return expense.date > date7DaysAgo; // only return expenses that are within the last 7 days

  });
// So this will give us our recentExpenses here, and now it's the recentExpenses that are set as a value on the expenses prop on ExpensesOutput. So we can forward RecentExpenses here.
  return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" />;
}

export default RecentExpenses;