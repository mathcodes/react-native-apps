import {View } from 'react-native';
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

function ExpensesOutput( {expenses} ) {
  return (  
    <View>
      {/* summary */}
      <ExpensesSummary />
      <ExpensesList />
    </View>
  )
}

export default ExpensesOutput;