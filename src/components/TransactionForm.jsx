import React, { useState } from "react";

function TransactionForm({ onAddTransaction, className }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ description, amount: parseFloat(amount), date });
    setDescription("");
    setAmount("");
    setCategory("");
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="form-group">
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      </div>
      <div className="form-group">
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
       </div>
       <div className="form-group">
        <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <button type="submit">Add Transaction</button>
      </div>
    </form>
  );
};

export default TransactionForm;
