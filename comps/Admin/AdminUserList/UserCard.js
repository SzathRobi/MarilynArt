import { Card, IconButton, Typography } from "@material-ui/core";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

export default function UserCard({user}) {

    const user_card = {
        width: "300px",
        padding: "1rem",
        position: "relative",
        margin: "1rem",
      }

      const user_icon_container = {
          position: "relative",
          height: 100
      }
      
      const user_icon = {
        fontSize: "5rem",
        color: "#a7a7a7",
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)"
      }
      
      const icon_container = {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        right: 0,
        bottom: 0,
      }
      

    return (
      <Card elevation={5} style={user_card} >
        <div style={user_icon_container}>
          <PersonRoundedIcon style={user_icon} />
        </div>
        <Typography style={{ marginBottom: 10 }} align="left" variant="body1">
          Email: {user.email}
        </Typography>
        <Typography align="left" variant="body1">
          Username: {user.username}
        </Typography>
        <div style={icon_container}>
          <IconButton>
            <MailRoundedIcon />
          </IconButton>
          <IconButton>
            <DeleteRoundedIcon />
          </IconButton>
        </div>
      </Card>
    )
}