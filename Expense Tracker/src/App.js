import React, { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpenses from "./component/NewExpenses/NewExpense";

const DUMMY_DATA = [
  {
    id: "1",
    name: "Shadow Count",
    amount: 800000,
    date: new Date(2000, 8, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const appExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={appExpenseHandler}></NewExpenses>
      <Expenses listOfItems={expenses}></Expenses>
    </div>
  );
}

export default App;
