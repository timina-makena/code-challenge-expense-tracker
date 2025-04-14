import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";
import "./App.css"; 

function App() {
 
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 150,
      category: "Food",
    },
    {
      id: 2,
      description: "Rent",
      amount: 300,
      category: "Shelter",
    },
    {
      id: 3,
      description: "Clothes",
      amount: 100,
      category: "Clothing",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");


  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

 
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

 
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

 
  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseTable
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;
