import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const UsersForm = ({getAllUsers, updateInfo, setUpdateInfo}) => {

    useEffect(() => {
        if(updateInfo){
            reset(updateInfo)
        }
    }, [updateInfo])

    
    const userDefaultValue = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }

    const createUser = data => {
        const URL = "https://users-crud1.herokuapp.com/users/"
        axios.post(URL, data)
            .then(res => 
                {console.log(res.data)
                getAllUsers()
                })
            .catch(err => console.log(err))
    }

    const updateUser = data => {
        const URL = `https://users-crud1.herokuapp.com/users/${updateInfo.id}/`
        axios.patch(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const { register, reset, handleSubmit} = useForm()

    const submit = data => {
        if(updateInfo){
            updateUser(data)
            setUpdateInfo()
        } else {
        createUser(data);
        }
        reset(userDefaultValue)
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='form'>
        <h2 className='form__title'>{updateInfo ? "Update User" : "New User"}</h2>
        <div className='form__list'>
            <div className='form__item'>
                <label>First Name</label>
                <input {...register("first_name")} type="text" id='first_name' />
            </div>
            <div className='form__item'>
                <label>Last name</label>
                <input {...register("last_name")} type="text" id='last_name'/>
            </div>
            <div className='form__item'>
                <label>Email</label>
                <input {...register("email")} type="email" id='email' />
            </div>
            <div className='form__item'>
                <label>Password</label>
                <input {...register("password")} type="password" id='pass'/>
            </div>
            <div className='form__item'>
                <label>Birthday</label>
                <input {...register("birthday")} type="date" id='birthday'/>
            </div>
            <button className='form__btn'> {updateInfo ? "Update" : "Upload"} </button>
        </div>
        <hr />
    </form>
  )
}

export default UsersForm