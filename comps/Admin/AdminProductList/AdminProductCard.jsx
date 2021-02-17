import React from 'react'
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core"
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import adminCardStyles from "../../../styles/AdminProductCard.module.css"
import AdminProductModal from "./AdminProductModal/AdminProductModal"
import AdminProductDetails from './AdminProductDetails/AdminProductDetails';
import axios from 'axios';


function AdminProductCard({file}) {



   const removeTodo = (name) => {
        //axios.delete("http://localhost:3000/api/product/delete", { data: { name: name } })
        axios.delete("https://marilyn-art-amj7exip8.vercel.app/api/product/delete", { data: { name: name } })
        //console.log(file.name)
      };

//edit modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
//detail modal
    const [detailOpen, setDetailOpen] = React.useState(false);

    const handleClickOpenDetail = () => {
      setDetailOpen(true);
    };
  
    const handleCloseDetail = () => {
      setDetailOpen(false);
    };
  

  return (
    <Card className={adminCardStyles.adminProductCard} elevation={5}>
     
      <CardContent className={adminCardStyles.cardContent}>
        <Typography className={adminCardStyles.cardContentText}  variant="h5">{file.name}</Typography>
        <Typography className={adminCardStyles.cardContentText} style={{fontWeight: 600}} variant="h6">{file.price}Ft</Typography>
        <Typography className={adminCardStyles.cardContentText} color="textSecondary" variant="body1">{file.category}</Typography>
      </CardContent>
      <CardActions className={adminCardStyles.iconContainer}>
        <IconButton onClick={handleClickOpenDetail} className={adminCardStyles.iconBtn}>
          <InfoIcon />
        </IconButton>
        <IconButton onClick={handleClickOpen} className={adminCardStyles.iconBtn}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(file.name)} className={adminCardStyles.iconBtn}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
      <AdminProductModal file={file} open={open} handleClose={handleClose} id={file._id}/>
      <AdminProductDetails file={file} detailOpen={detailOpen} handleCloseDetail={handleCloseDetail}/>
    </Card>
  )
}

export default AdminProductCard
