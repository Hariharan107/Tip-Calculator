/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
const Form = ({ onAddFriends }) => {
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    if (image.trim() === "" || name.trim() === "")
      return alert("Please enter the fields");
    const newFriend = {
      id,
      balance: 0,
      name,
      image: `${image}?=${id}`,
    };
    onAddFriends(newFriend);
    setImage("https://i.pravatar.cc/48");
    setName("");
  };
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image Url</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default Form;
