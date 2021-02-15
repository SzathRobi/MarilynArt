import React from 'react'
import AdminProductCard from './AdminProductCard'


function AdminProductList({multiplefiles}) {

  const adminProductList = {
    width: "calc(100% - 200px)",
    padding: "1rem",
    position: "absolute",
    top: 0,
    left: "200px",
    display: "flex",
    flexWrap: "wrap"
  }

  return (
    <div style={adminProductList}>
      {multiplefiles.map((product, index) => 
       <AdminProductCard file={product} key={index}/>
      )}
    </div>
  )
}

export default AdminProductList
