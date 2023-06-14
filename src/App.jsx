import { useState } from "react";
import MoneySplit from "./MoneySplit";
import Button from "./components/Button";
import Form from "./components/Form";
import Friend from "./components/Friend";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const App = () => {
  const [open, SetIsOpen] = useState(false);
  const [friends, SetFriends] = useState(initialFriends);
  const [selectedFriends, setSelectedFriends] = useState(null);
  const ToggleButton = () => {
    SetIsOpen((c) => !c);
  };
  const handleAddFriends = (newFriend) => {
    SetFriends((prev) => [...prev, newFriend]);
    SetIsOpen(false);
  };
  const handleSelectFriend = (friend) => {
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    SetIsOpen(false);
  };
  const handleSplitBill = (value) => {
    SetFriends(
      friends.map((friend) =>
        friend.id === selectedFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    alert("The bill is splited");
    setSelectedFriends(null);
  };
  return (
    <div className='app'>
      <div className='sidebar'>
        <Friend
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriends={selectedFriends}
        />
        {open && <Form onAddFriends={handleAddFriends} />}
        <Button onClick={ToggleButton}>{open ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriends && (
        <MoneySplit
          onSelectedFriend={selectedFriends}
          onSpiltBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
