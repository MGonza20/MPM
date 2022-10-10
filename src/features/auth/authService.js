/* eslint-disable linebreak-style */
// import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

// Register user
const register = async (userData) => {
    // const response = await axios.post(API_URL, userData)
    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    // return response.data
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((response) => response.json())
        .then((result) => {
            return result
        })
}

// Login user
const login = async (userData) => {
    // const response = await axios.post(API_URL + 'login', userData)
    // if (response.data) {
    //     localStorage.setItem('user', JSON.stringify(response.data))
    // }
    // return response.data
    return fetch(API_URL + 'login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((response) => response.json())
        .then((result) => {
            return result
        })
}

//Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login,
}

export default authService
