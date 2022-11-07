import React, { useState } from 'react'
import InputComponent from './components/InputComponent'
import {
    Heading,
    Button,
    CheckboxGroup,
    Checkbox,
    Stack,
    Radio,
    RadioGroup,
    FormControl,
    Select,
    Input,
    FormLabel,
} from '@chakra-ui/react'
import '../styles/form.css'

// Librerias para usar el Mapa
import { MapContainer, TileLayer } from 'react-leaflet'

// Método para tener un nuevo Vet
import NewVet from './functions/NewVet'

// Implementar Componentes Extras
import LocateMarker from './components/LocateMarker'

const RegisterVet = () => {
    const [nombre, setNombre] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [zona, setZona] = useState('')
    const [direccion, setDireccion] = useState('')
    const [correo, setCorreo] = useState('')
    const [dicServices, setDicServices] = useState({})
    const [telefono, setTelefono] = useState('')
    const [emergencia, setEmergencia] = useState('')
    const [apertura, setApertura] = useState('08:00')
    const [cierre, setCierre] = useState('20:00')
    const [position, setPosition] = useState(null)

    const handleAddVet = async (event) => {
        event.preventDefault()
        const infoNewVet = await NewVet(
            {
                nombre: nombre,
                ciudad: ciudad,
                zona: zona,
                direccion: direccion,
                correo: correo,
                telefono: telefono,
                emergencia: emergencia,
                apertura: apertura,
                cierre: cierre,
            },
            dicServices,
            position
        )
        alert(infoNewVet.info)
    }

    return (
        <div data-testid={'register-vet'}>
            <div>
                <div className="provisionalBackgorund">
                    <div className="faqCont container">
                        <div className="infoContainer">
                            <div className="titleContainer">
                                <Heading className="title">
                                    Formulario para registrar una veterinaria
                                </Heading>
                            </div>
                            <form
                                onSubmit={handleAddVet}
                                data-testid={'handle-add-vet-test'}
                            >
                                <InputComponent
                                    data-testid={'get-nombre-test'}
                                    getter={setNombre}
                                    title="Nombre"
                                    message="Ingresa el nombre del veterinario"
                                />
                                <InputComponent
                                    data-testid={'get-ciudad-test'}
                                    getter={setCiudad}
                                    title="Ciudad"
                                    message="Ingresa la ciudad de tu veterinaria"
                                />

                                <InputComponent
                                    data-testid={'get-zona-test'}
                                    getter={setZona}
                                    title="Zona"
                                    message="Ingresa la zona de tu veterinaria"
                                />

                                <InputComponent
                                    data-testid={'get-direccion-test'}
                                    getter={setDireccion}
                                    title="Dirección"
                                    message="Ingresa la dirección de tu veterinaria"
                                />

                                <InputComponent
                                    data-testid={'get-correo-test'}
                                    getter={setCorreo}
                                    title="Correo"
                                    message="Ingresa tu correo"
                                />

                                <FormLabel>Servicios ofrecidos</FormLabel>
                                <CheckboxGroup
                                    colorScheme="orange"
                                    defaultValue={['none']}
                                >
                                    <Stack
                                        spacing={[2, 3]}
                                        direction={['column']}
                                    >
                                        <Checkbox
                                            data-testid={'vacunacion-test'}
                                            value="Vacunacion"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    // ! - Probar desde aquí...
                                                    ...prevTest,
                                                    vacunacion:
                                                        e.target.checked,
                                                }))
                                            }
                                        >
                                            Vacunacion
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'rayos-x-test'}
                                            value="Rayos X"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    rayos_x: e.target.checked,
                                                }))
                                            }
                                        >
                                            Rayos X
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={
                                                'examenes-corporales-test'
                                            }
                                            value="Examenes corporales"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    examenes_corporales:
                                                        e.target.checked,
                                                }))
                                            }
                                        >
                                            Examenes corporales
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'hematologias-test'}
                                            value="Hematologías"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    hematologias:
                                                        e.target.checked,
                                                }))
                                            }
                                        >
                                            Hematologías
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'hospedaje-test'}
                                            value="Hospedaje"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    hospedaje: e.target.checked,
                                                }))
                                            }
                                        >
                                            Hospedaje
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'grooming-test'}
                                            value="Grooming"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    grooming: e.target.checked,
                                                }))
                                            }
                                        >
                                            Grooming
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'desparacitacion-test'}
                                            value="Desparacitacion"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    desparacitacion:
                                                        e.target.checked,
                                                }))
                                            }
                                        >
                                            Desparacitacion
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'castraciones-test'}
                                            value="Castraciones"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    castraciones:
                                                        e.target.checked,
                                                }))
                                            }
                                        >
                                            Castraciones
                                        </Checkbox>
                                        <Checkbox
                                            data-testid={'operacion-test'}
                                            value="Operacion"
                                            onChange={(e) =>
                                                setDicServices((prevTest) => ({
                                                    ...prevTest,
                                                    operacion: e.target.checked,
                                                }))
                                            }
                                        >
                                            Operacion
                                        </Checkbox>
                                    </Stack>
                                </CheckboxGroup>

                                <br></br>
                                <h1>
                                    Ingresa la ubicacion donde se encuentra la
                                    veterinaria
                                </h1>
                                <br></br>

                                <MapContainer className='map-container'
                                    center={[14.6050635, -90.4893286]}
                                    zoom={13}
                                >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <LocateMarker
                                        position={position}
                                        setPosition={setPosition}
                                    />
                                </MapContainer>

                                {position !== null && (
                                    <div>
                                        <p data-testid={'coords-text'}>
                                            Coordenadas Seleccionadas
                                        </p>
                                        <p>
                                            Lat: {position.lat}, Long:{' '}
                                            {position.lng}{' '}
                                        </p>
                                    </div>
                                )}

                                <InputComponent
                                    getter={setTelefono}
                                    title="Teléfono"
                                    message="12345678"
                                />
                                <FormControl isRequired>
                                    <FormLabel>Emergencia</FormLabel>
                                    <RadioGroup
                                        onChange={setEmergencia}
                                        value={emergencia}
                                    >
                                        <Stack direction="row">
                                            <Radio value="true">Si</Radio>
                                            <Radio value="false">No</Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>

                                <FormControl isRequired>
                                    <FormLabel>Tipo de veterinaria</FormLabel>
                                    <Select
                                        focusBorderColor={'rgb(174 213 142)'}
                                    >
                                        <option value="Nada">
                                            {'Cualquiera'}
                                        </option>
                                        <option value="Normal">
                                            {'Normal'}
                                        </option>
                                        <option value="Petshop">
                                            {'Petshop'}
                                        </option>
                                        <option value="Clinica">
                                            {'Clinica'}
                                        </option>
                                        <option value="Hospital">
                                            {'Hospital'}
                                        </option>
                                    </Select>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Hora de apertura</FormLabel>
                                    <Input
                                        data-testid={'apertura-test'}
                                        onChange={(event) =>
                                            setApertura(event.target.value)
                                        }
                                        title="Hora de apertura"
                                        size="md"
                                        type="time"
                                        focusBorderColor={'rgb(174 213 142)'}
                                    />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel>Hora de cierre</FormLabel>
                                    <Input
                                        data-testid={'cierre-test'}
                                        onChange={
                                            (event) =>
                                                setCierre(event.target.value) // ! ... Hasta acá
                                        }
                                        title="Hora de cierre"
                                        size="md"
                                        type="time"
                                        focusBorderColor={'rgb(174 213 142)'}
                                    />
                                </FormControl>
                                <Button
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
                                    Enviar formulario
                                </Button>
                            </form>

                            <p className="questionCont">
                                {' '}
                                <a href="/">
                                    {' '}
                                    <b className="highlight">¿Regresar?</b>
                                </a>
                            </p>
                        </div>

                        <div className="innerContainer"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterVet
