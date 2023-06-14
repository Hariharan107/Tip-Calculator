/* eslint-disable react/prop-types */
import FriendList from "./FriendList";

const Friend = ({ friends, onSelection, selectedFriends }) => {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <FriendList
            {...friend}
            key={friend.id}
            onSelection={onSelection}
            selectedFriends={selectedFriends}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friend;
