import React from 'react'
import UserKadha from '../userkadha/UserCard'
import './userList.css'

const UserList = ({listOfUsers}) => {
  return (
    <div className="user-list">
        {listOfUsers && listOfUsers.map((user,index) => <UserKadha key={index} user={user}/>)}
    </div>
  )
}

export default UserList