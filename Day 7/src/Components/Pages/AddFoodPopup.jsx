import { useState } from "react";
import '../../Asserts/Popup.css';

const Popup = ({ onClose, onAdd }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");
  
    const handleAdd = () => {
      onAdd({ name, price, description, time , image});
      onClose();
    }
  
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>Add Food</h2>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <label>Time:</label>
          <input type="text" value={time} onChange={(e) => setTime(e.target.value)} />
          <label>Image Link:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          <button onClick={handleAdd}>Add</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    );
  }
export default Popup;
