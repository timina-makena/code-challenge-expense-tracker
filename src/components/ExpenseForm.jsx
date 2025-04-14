import { useState } from "react";

function ExpenseForm({ addExpense }) {
  // State to track what's typed in the form
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });

 
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  
  function handleSubmit(event) {
    event.preventDefault();

    const newExpense = {
      ...formData,
      id: Date.now()
    };

    addExpense(newExpense);

    // Clear the form after adding
    setFormData({
      description: "",
      amount: "",
      category: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
