import React, {useState, useEffect} from 'react'
import { Typography, makeStyles } from '@material-ui/core'
//import Image from "next/image"
//import comingSoonImg from "../../public/comingSoonImg.svg"
function ComingSoonPage() {

  const classes = useStyles()  

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
      setLoaded(true)

      return () => {
          setLoaded(false)
      }
  }, [])

  const fadeIn = {
    position: "absolute",
    top: "10%",
    left: 0,
    width: "100%",
    height: "90%",
    transition: "1000ms",
    opacity: loaded ? 1 : 0
  }

  return (
    <div className={classes.comingSoon} style={fadeIn}>
        {
      //<Image src={comingSoonImg} className={classes.img} alt="MarilynArt coming soon image"/>
        }
      <div className={classes.textContainer}>
        <Typography className={classes.text} variant="h1">COMING SOON!</Typography>
      </div>
    </div>
  )
}

export default ComingSoonPage

const useStyles = makeStyles({
    comingSoon: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      transition: "1000ms"
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
    textContainer: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(255,255,255,0.2)",
      borderRadius: 40,
      backdropFilter: "blur(6px)",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.5)",
      padding: "20px 10px,"
    },
    text: {
       
    }
  });
  