import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./ImgUpload.css"

export default function ImgUpload({MultipleFileChange}) {


  return (
    <div className="imgUpload">
      <div>
        <label>Képek feltöltése</label>
        <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
      </div>
    </div>
  )
}