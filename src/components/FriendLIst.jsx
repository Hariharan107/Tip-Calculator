/* eslint-disable react/prop-types */

import Button from "./Button";

const FriendList = ({
  id,
  name,
  image,
  balance,
  onSelection,
  selectedFriends,
}) => {
  const isSelected = selectedFriends && selectedFriends.id === id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 ? (
        <p className='red'>{`You owe $${Math.abs(balance)} to ${name}`}</p>
      ) : balance > 0 ? (
        <p className='green'>{`${name} owes you $${balance}`}</p>
      ) : (
        <p>{`You and ${name} are even`}</p>
      )}
      <Button onClick={() => onSelection({ id, name })}>
        {isSelected ? "CLOSE" : "SELECT"}
      </Button>
    </li>
  );
};

export default FriendList;
