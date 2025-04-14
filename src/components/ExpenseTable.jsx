import { useState } from "react";

function ExpenseTable({ expenses, deleteExpense }) {
  const [sortBy, setSortBy] = useState(null);

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortBy) return 0;
    return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
  });

  return (
    <div>
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => setSortBy("description")}>
          Sort by Description
        </button>
        <button onClick={() => setSortBy("category")}>
          Sort by Category
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => deleteExpense(expense.id)}> Clear </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
