import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export default function AdminProductDetails({file, detailOpen, handleCloseDetail}) {

  return (
    <div>
      <Dialog
        open={detailOpen}
        onClose={handleCloseDetail}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"TERMÉKINFÓ"}</DialogTitle>
       {/* <img 
        width={250}
        src={`http://localhost:5000/${file.files[0].filePath}`}
       />*/}  
        <DialogContent>
          <Typography>Termék: {file.name}</Typography>
          <Typography>Ár: {file.price}</Typography>
          <Typography>Kategória: {file.category}</Typography>
          <Typography>Leírás:</Typography>
          <Typography>{file.desc}</Typography>
          <Typography>Történet:</Typography>
          <Typography>{file.story}</Typography>
          <Typography>Raktáron: {file.inStorage ? <CheckCircleIcon /> : <CancelIcon />}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetail} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
