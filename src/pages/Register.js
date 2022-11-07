import { useState, useEffect } from 'react'
import { Heading, Button } from '@chakra-ui/react'
import '../styles/register.css'
import { Input, FormLabel } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    

    const { name, email, password, password2 } = formData
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    

    const {user, isError, isSuccess, message} = useAppSelector((state) => state.auth)
    

    useEffect(() => {
        if(isError){
            toast.error(message)
            
        }

        if(isSuccess || user){
            navigate('/RegisterVet')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error('Las contraseñas no son iguales')
            
        } else {
            
            const userData = {
                name,
                email,
                password,
            }
            dispatch(register(userData))
        }
    }

    const colors = {
        verde: 'rgb(174 213 142)',
        blanco: 'rgb(255, 255, 255)',
    }
    

    return (
        <div data-testid={'register-page-test'}>
            <div className="provisionalBackgorund">
                <div className="outerContainer container">
                    <div className="infoContainer">
                        <div className="titleContainer">
                            <Heading className="title">Cree una cuenta</Heading>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="outerContainer2">
                                <FormLabel>{'Nombre'}</FormLabel>
                                <Input 
                                    data-testid={'name-input-test'}
                                    type='text'
                                    value={name}
                                    name='name'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su nombre'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Correo'}</FormLabel>
                                <Input
                                    data-testid={'email-input-test'}
                                    type='text'
                                    value={email}
                                    name='email'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su correo'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Contraseña'}</FormLabel>
                                <Input
                                    data-testid={'password-input-test'}
                                    type='text'
                                    value={password}
                                    name='password'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese su contraseña'}
                                />
                            </div>

                            <div className="outerContainer2">
                                <FormLabel>{'Confirmar contraseña'}</FormLabel>
                                <Input
                                    data-testid={'password-veri-input-test'}
                                    type='text'
                                    value={password2}
                                    name='password2'
                                    onChange={handleChange}
                                    focusBorderColor={colors.verde}
                                    placeholder={'Ingrese nuevamente su contraseña'}
                                />
                            </div>

                            <Button
                                data-testid="button-accept-test"
                                backgroundColor="#ea9a64"
                                _hover="rgb(174 213 142)"
                                _active={{
                                    bg: 'rgb(174 213 142)',
                                    borderColor: 'rgb(174, 213, 142)',
                                }}
                                color="#fff"
                                type="submit"
                                width="100%"
                                marginTop="10px"
                            >
                                Aceptar
                            </Button>

                        </form>
                        <p className="questionCont">
                            ¿Tiene cuenta?{' '}
                            <a href="./Login">
                                <b className="highlight">¡Inicie Sesión!</b>
                            </a>
                        </p>
                    </div>
                    <div className="innerContainer"></div>
                </div>
            </div>
        </div>
    )
}

export default Register
