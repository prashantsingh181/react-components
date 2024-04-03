import React from 'react'

const UserCard = ({userInfo}) => {
  return (
    <div className="user-card">
        <img height="200" src={userInfo.avatar_url} alt="user-avatar" />
        <div><strong>Name: </strong><span>{userInfo.name}</span></div>
        <a href={userInfo.html_url} target="_blank">Github Profile</a>
    </div>
  )
}

export default UserCard