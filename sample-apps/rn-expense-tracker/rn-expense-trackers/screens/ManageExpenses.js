import { Text } from 'react-native'

function ManageExpenses({route}) {
  // drilling into an object which might be undefined
  // using '?' inline and rendering the UI accordingly:
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

return (
  <Text>Hello</Text>
)
}

export default ManageExpenses;