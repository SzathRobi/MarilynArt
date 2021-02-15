import React, { useState, useEffect } from 'react'
import { makeStyles } from "@material-ui/core";

import AdminMenu from "../../comps/Admin/AdminMenu"
import ComingSoonPage from '../../comps/Admin/ComingSoonPage';
import AdminAddItems from '../../comps/Admin/AdminAddItems/AdminAddItems';
import AdminProductList from '../../comps/Admin/AdminProductList/AdminProductList';
import { connectToDatabase } from '../../util/mongodb'
//import {getSingleFiles, getMultipleFiles} from '../../data/api';

//import { connectToDatabase } from '../../util/mongodb'

export async function getStaticProps() {
    const { db } = await connectToDatabase();
    const multiplefiles = await db
      .collection("multiplefiles")
      .find({})
      //.sort({ metacritic: -1 })
      .limit(1000)
      .toArray();
    return {
      props: {
        multiplefiles: JSON.parse(JSON.stringify(multiplefiles)),
      },
    };
  }


function AdminPanel({multiplefiles}) {

  const classes = useStyles()
  //const user = useSelector(state => state.user)  

  const [whichPanel, setWhichPanel] = useState(1)
  const updateWhichPanel = value => setWhichPanel(value) 

//FOR IMG
/*const [singleFiles, setSingleFiles] = useState([]);
const [multipleFiles, setMultipleFiles] = useState([]);

const getSingleFileslist = async () => {
  try {
    const fileslist = await getSingleFiles();
    setSingleFiles(fileslist);
  } catch (error) {
    console.log(error);
  }
}
const getMultipleFilesList = async () => {
  try {
    const fileslist = await getMultipleFiles();
    setMultipleFiles(fileslist);
    console.log(multipleFiles);
  } 
  catch (error) {
    console.log(error);
  }
}
useEffect(() => {
  getSingleFileslist();
  getMultipleFilesList();
}, []);*/

  return (
   // user && user.role === "admin"
  //  ? 
    <div className={classes.adminPanel}>
      <AdminMenu updateWhichPanel={updateWhichPanel}/>
      { whichPanel === 1 && <ComingSoonPage /> }
      { whichPanel === 2 && <AdminProductList multiplefiles={multiplefiles}/> }
      { whichPanel === 3 && <AdminAddItems getsingle={() => getSingleFileslist()} getMultiple={() => getMultipleFilesList()}/> }
      { whichPanel === 4 && <ComingSoonPage /> }
    </div>
   // : <Redirect to="/MarilynArt"/>
  )
}

export default AdminPanel


const useStyles = makeStyles({
  adminPanel: {
    height: "89.3vh",
    position: 'relative',
    top: "0vh"
    //overflow: "hidden"
  },
  adminMenu: {
    width: 200,
    height: "100%",
    backgroundColor: "#ddd",
    paddingTop: 30,
  }
  });