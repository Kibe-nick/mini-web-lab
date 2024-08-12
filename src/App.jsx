import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import TransactionTable from "./components/TransactionTable"; 
import TransactionForm from "./components/TransactionForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, { id: Date.now(), ...newTransaction }]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <Header />
      <main className="main-content">
      <p>If you see this text, the component is rendering.</p>
        
      </main>
      <Footer />
     </div>
  );
}

export default App;
