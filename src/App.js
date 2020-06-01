import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 190 },
  { id: uuid(), charge: "salary", amount: 192 },
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending : {""}
        <span className="total">
          $
          {expenses.reduce((accumulator, current) => {
            return (accumulator += current.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
