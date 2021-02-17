import UserCard from "./UserCard"

export default function AdminUserList({users}) {
    
  const userListStyle = {
      position: "absolute",
      top: "4rem",
      left: "200px",
      display: "flex",
      flexWrap: "wrap"
  }

  return (
    <div style={userListStyle}>
      {users.map(user => <UserCard user={user} />)}
    </div>
  )
} 