const onLogout = ({ dispatch, logout, reset, navigate }) => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
}

export default onLogout
