import React from 'react'
import axios from 'axios'

const UserList = ({user, getAllUsers, setUpdateInfo}) => {

    const deleteUser = () => {
        const URL = (`https://users-crud1.herokuapp.com/users/${user.id}/`)
        axios.delete(URL)
            .then(res => {
                console.log(res.data);
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const handleUpdateClic = () => {
        setUpdateInfo(user)
    }

  return (
    <article className='card'>
        <div className='card__header'>
        <h2>{user["first_name"]} {user["last_name"]}</h2> <hr />
        </div>
        <div className='card__info'>
            <ul className='card__list'>
                <li className='card__item'>CORREO<span> <br />{user.email}</span></li>
                <li className='card__item'>CUMPLEAÑOS<span> <br />{user.birthday}</span></li>
            </ul>
            <div className='card_btns'>
                <button onClick={handleUpdateClic} className='card__btn'>Update</button>
                <button onClick={deleteUser} className='card__btn'>Delete</button>
            </div>
        </div>
    </article>
  )
}

export default UserList