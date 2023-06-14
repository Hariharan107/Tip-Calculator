/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./components/Button";

const MoneySplit = ({ onSelectedFriend, onSpiltBill }) => {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const FriendExpense = billValue ? billValue - userExpense : "";
  const [whoisPaying, setWhoisPaying] = useState("user");
  const { name } = onSelectedFriend;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!billValue || !userExpense) return;

    onSpiltBill(whoisPaying === "user" ? FriendExpense : -userExpense);
  };
  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💵Bill Value</label>
      <input
        type='text'
        value={billValue}
        onChange={(e) => setBillValue(+e.target.value)}
      />
      <label>Your expense</label>
      <input
        type='text'
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            +e.target.value > billValue ? userExpense : +e.target.value
          )
        }
      />
      <label>{name} expense</label>
      <input type='text' disabled value={FriendExpense} />
      <label>Who is paying bill</label>
      <select
        value={whoisPaying}
        onChange={(e) => setWhoisPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
};

export default MoneySplit;
