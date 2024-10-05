import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim() !== '') {
      setItems([...items, input]);
      setInput('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <TextField
          label="Add Item"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton color="primary" onClick={addItem}>
          <DeleteIcon />
        </IconButton>
      </div>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
            <IconButton color="secondary" onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ShoppingList;
