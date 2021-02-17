import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, Typography } from '@material-ui/core';
import axios from "axios"
//import "./AdminProductModal.css"
export default function AdminProductModal({file, open, handleClose}) {
  const [newName, setNewName] = useState(file.name) 
  const [newPrice, setNewPrice] = useState(file.price) 
  const [newCategory, setNewCategory] = useState(file.category) 
  const [newDesc, setNewDesc] = useState(file.desc) 
  const [newStory, setNewStory] = useState(file.story) 
  const [newInStorage, setNewInStorage] = useState(file.inStorage) 

  const newItem = {
      id: file._id,
      name: newName,
      price: newPrice,
      category: newCategory,
      desc: newDesc,
      story: newStory,
      inStorage: newInStorage
  }

  const changeItem = (newItem) => {
    //return axios.put(`http://localhost:3000/api/product/update`, newItem);
    return axios.put(`https://marilyn-art-amj7exip8.vercel.app/api/product/update`, newItem);
  };

  const inputContainer = {
    display: "flex",
    flexDirection: "column"
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Termékmódosítás</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ( Nevet nem lehet átírni MÉG .... bocsika )
          </DialogContentText>
          <div style={inputContainer}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              value={newName}
              onChange={e => setNewName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Price"
              value={newPrice}
              onChange={e => setNewPrice(e.target.value)}
            />
            <FormControl >
              <InputLabel id="category-dropdown-label">Kategória</InputLabel>
              <Select
                labelId="category-dropdown-label"
                id="category-dropdown"
                value={newCategory}
                onChange={e => setNewCategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Ásvány"}>Ásvány</MenuItem>
                <MenuItem value={"Füstölő"}>Füstölő</MenuItem>
                <MenuItem value={"Nyaklánc"}>Nyakklánc</MenuItem>
              </Select>
            </FormControl>
            <TextareaAutosize
              margin="dense"
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
              rowsMin={3}
            />
            <TextareaAutosize
              margin="dense"
              value={newStory}
              onChange={e => setNewStory(e.target.value)}
              rowsMin={3}
            />
            <label>
              <Typography>Raktáron:</Typography>
              <Checkbox
                color="primary"
                checked={newInStorage}
                onChange={e => setNewInStorage(!newInStorage)}
                inputProps={{ 'aria-label': 'inStorage checkbox' }}
              />
            </label>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            MÉGSE
          </Button>
          <Button onClick={() => changeItem(newItem, file._id)} color="primary">
            MÓDOSÍTÁS
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}