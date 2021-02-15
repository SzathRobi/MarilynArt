import React, { useState } from 'react'
import { 
    makeStyles, 
    TextareaAutosize, 
    TextField,
    Typography, 
    Button,
    MenuItem, 
    FormControl, 
    InputLabel, 
    Select, 
    Checkbox 
} from "@material-ui/core"
//import {singleFileUpload, multipleFilesUpload} from '../../../data/api';
//import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';
//import placeholder from "./placeholder.png"

function AdminAddItems(props) {

  const classes = useStyles()

  const [name, setName] = useState("")
  const handleName = event => setName(event.target.value)

  const [price, setPrice] = useState(0)
  const handlePrice = event => setPrice(event.target.value)

  const [desc, setDesc] = useState("")
  const handleDesc = event => setDesc(event.target.value);

  const [story, setStory] = useState("")
  const handleStory = event => setStory(event.target.value)

  const [category, setCategory] =useState("")
  const handleCategory = event => setCategory(event.target.value)

  const [inStorage, setInStorage] = useState(true)
  const handleInstorage = (event) => {
    setInStorage(event.target.checked);
  };

  //IMG UPLOAD 

const [singleFile, setSingleFile] = useState('');
const [multipleFiles, setMultipleFiles] = useState('');
const [title, setTitle] =  useState('');
const [singleProgress, setSingleProgress] = useState(0);
const [multipleProgress, setMultipleProgress] = useState(0);

const SingleFileChange = (e) => {
  setSingleFile(e.target.files[0]);
  setSingleProgress(0);
}

const MultipleFileChange = (e) => {
  setMultipleFiles(e.target.files);
  setMultipleProgress(0);
}
const singleFileOptions = {
  onUploadProgress: (progressEvent) => {
    const {loaded, total} = progressEvent;
    const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
    setSingleProgress(percentage);
  }
}
const mulitpleFileOptions = {
  onUploadProgress: (progressEvent) => {
    const {loaded, total} = progressEvent;
    const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
    setMultipleProgress(percentage);
  }
}

const checkObject = {
  file:singleFile,
  name:name,
  price:price,
  desc:desc,
  story:story,
  category:category,
  inStorage:inStorage
}

const uploadSingleFile = async () => {
  const formData = new FormData()
  formData.append('file', singleFile)
  formData.append('name', name)
  formData.append('price', price)
  formData.append('desc', desc)
  formData.append('story', story)
  formData.append('category', category)
  formData.append('inStorage', inStorage)
  console.log(checkObject)
  await singleFileUpload(formData, singleFileOptions);
  props.getsingle();
}
const UploadMultipleFiles = async () => {
  const formData = new FormData();
  formData.append('name', name)
  formData.append('price', price)
  formData.append('desc', desc)
  formData.append('story', story)
  formData.append('category', category)
  formData.append('inStorage', inStorage)
  for (let i = 0; i < multipleFiles.length; i++) {
    formData.append('files', multipleFiles[i]);                      
  }
  await multipleFilesUpload(formData, mulitpleFileOptions);
  props.getMultiple();
}

  
  return (
    <div className={classes.adminAddItems}>
      <form className={classes.form} encType="multipart/form-data">
        <Typography className={classes.formTitle} variant="h2">TERMÉK HOZZÁADÁSA</Typography>
        <div className={classes.formWrapper}>
          <div className={classes.formContainer}>
            <TextField onChange={e => setName(e.target.value)} className={classes.formInput} label="TERMÉK NEVE"></TextField>
            <TextField onChange={e => setPrice(e.target.value)} className={classes.formInput} type="number" label="TERMÉK ÁRA"></TextField>
            <TextareaAutosize onChange={e => setDesc(e.target.value)} className={classes.formInput} rowsMin={4} placeholder="LEÍRÁS"></TextareaAutosize>
            <TextareaAutosize onChange={e => setStory(e.target.value)} className={classes.formInput} rowsMin={4} placeholder="TÖRTÉNETE"></TextareaAutosize>
          </div>
          <div className={classes.formContainer}>
            <FormControl className={classes.margin}>
              <InputLabel id="category-dropdown-label">Kategória</InputLabel>
              <Select
                labelId="category-dropdown-label"
                id="category-dropdown"
                value={category}
                onChange={handleCategory}
                className={classes.formInput}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Ásvány"}>Ásvány</MenuItem>
                <MenuItem value={"Füstölő"}>Füstölő</MenuItem>
                <MenuItem value={"Nyaklánc"}>Nyakklánc</MenuItem>
              </Select>
            </FormControl>
            <label className={classes.checkboxLabel}>
              <Typography>Raktáron:</Typography>
              <Checkbox
                color="primary"
                checked={inStorage}
                onChange={handleInstorage}
                inputProps={{ 'aria-label': 'inStorage checkbox' }}
              />
            </label>
            <label>
              <Typography>Fájl kiválasztása</Typography>
              <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
            </label>
          </div>  
        </div>
        <Button onClick={() => UploadMultipleFiles()} className={classes.submitBtn} variant="contained">hozzáadás</Button>
      </form>    
    </div>
  )
}

export default AdminAddItems

const useStyles = makeStyles({
    adminAddItems: {
        width: "80%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0
    },
    form: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    formTitle: {
        position: "relative",
        bottom: 30
    },
    formWrapper: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    formContainer: {
        width: "50%",
        display: "flex",
        flexDirection: "column"
    },
    formInput: {
        width: "80%",
        margin: "0.5rem 0",
        padding: 5,
        fontSize: 18
    },
    checkboxLabel: {
        display: "flex",
        alignItems: "center"
    },
    progressbarContainer: {
      width: 200,
      height: 200,
    },
    submitBtn: {
        backgroundColor: "#039be5",
        color: "#fff",
        margin: "0 60% 0 auto"
    }
})