import React from 'react'
import AdminProductCard from './AdminProductCard'


function AdminProductList({products}) {

  const adminProductList = {
    width: "calc(100% - 200px)",
    padding: "1rem",
    position: "absolute",
    top: "4rem",
    left: "200px",
    display: "flex",
    flexWrap: "wrap",
  }

  return (
    <div style={adminProductList}>
      {products.map((product, index) => 
       <AdminProductCard file={product} key={index}/>
      )}
    </div>
  )
}

export default AdminProductList
