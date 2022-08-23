import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/"
      axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <div className="App">
      <h1 className='general-title'>Users CRUD</h1> <hr />
      <div className='user-container'>
        <UsersForm 
        getAllUsers={getAllUsers}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
        />
      </div>
      <div className='card-container'>
        {
          users?.map(user => (
            <UserList
            key={users.id}
            user={user}
            getAllUsers={getAllUsers}
            setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
