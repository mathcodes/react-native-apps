import { Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function ExpensesSummary({expenses, periodName}) {
  const expenseSum = expenses.reduce((sum,expense) => {
    return (
      sum + expense.amount
    )
  }, 0)

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expenseSum.toFixed(2)}</Text>
    </View>
  )
}

export default ExpensesSummary;


const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:5
  }, 
  period:{
    fontSize: 18,
    color: GlobalStyles.colors.primary400
  },
  sum: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  boxTitle: {
    backgroundColor: GlobalStyles.colors.primary200,
    width: (window.width),
    fontSize:20,
    margin:2,
    padding:4.5
  },
  boxSummary: {
    backgroundColor: GlobalStyles.colors.accent500,
    width: (window.width),
    color:'white',
    textAlign: 'center',
    fontSize:20,
    margin:2,
    padding:4.5
  }
});