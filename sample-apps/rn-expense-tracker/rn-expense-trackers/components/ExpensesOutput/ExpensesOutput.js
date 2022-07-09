import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

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

function ExpensesOutput( {expenses, expensesPeriod} ) {
  return (  
    <View style={styles.container}>
      {/* summary */}
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
  }
})