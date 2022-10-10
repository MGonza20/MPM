import React, { useState, useEffect } from 'react'
import CardComponent from './components/CardComponent'
import Pagination from './components/Pagination'
import VetPopup from './VetPopup'
import '../styles/search.css'

import {
    Heading,
    Button,
    Input,
    FormControl,
    Select,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'

import FetchVets from './functions/FetchVets'

function Search() {
    const [posts, setPosts] = useState(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedVet, setSelectedVet] = useState({})
    const [seePopup, setSeePopup] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(9)

    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)

    useEffect(() => {
        FetchVets(setPosts)
    }, [])

    const idxOfLastPost = currentPage * postsPerPage
    const idxOfFirstPost = idxOfLastPost - postsPerPage
    const currentPosts =
        posts !== null ? posts.slice(idxOfFirstPost, idxOfLastPost) : null

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const styles = {
        modalBtn: {
            width: '110px',
            height: '40px',
            borderRadius: '10px',
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '17px',
        },
        pagination: {
            listStyle: 'none',
        },
    }

    class FilterFrom extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                emerg: true,
                kind: 'Nada',
                services: '',
                the_time: '',
            }
            // this.handleChange = this.handleChange.bind(this)
            // this.applyFilters = this.applyFilters.bind(this)
        }

        handleChange(event) {
            this.setState({ [event.target.name]: event.target.value })
        }

        // applyFilters(event) {
        //     updateData(
        //         this.state.emerg,
        //         this.state.kind,
        //         this.state.services,
        //         this.state.the_time
        //     )
        // }

        render() {
            return (
                <>
                    <form>
                        <div className="SearchOuterContainer2">
                            <FormControl>
                                <label>Emergencia</label>
                                <Select
                                    focusBorderColor={'rgb(174 213 142)'}
                                    name="emerg"
                                    value={this.state.emerg}
                                    onChange={this.handleChange}
                                >
                                    <option
                                        value="true"
                                        onClick={() =>
                                            console.log('PRUEBA TRUE')
                                        }
                                    >
                                        {'Si'}
                                    </option>
                                    <option
                                        value="false"
                                        onClick={() =>
                                            console.log('PRUEBA FALSE')
                                        }
                                    >
                                        {'No'}
                                    </option>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="SearchOuterContainer2">
                            <FormControl>
                                <label>Hora Disponibilidad</label>
                                <br />
                                <input
                                    type="time"
                                    name="the_time"
                                    value={this.state.the_time}
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                        </div>

                        <div className="SearchOuterContainer2">
                            <FormControl>
                                <label>Tipo Veterinaria</label>
                                <Select
                                    focusBorderColor={'rgb(174 213 142)'}
                                    value={this.state.kind}
                                    onChange={this.handleChange}
                                    name="kind"
                                >
                                    <option value="Nada">{'Cualquiera'}</option>
                                    <option value="Normal">{'Normal'}</option>
                                    <option value="Petshop">{'Petshop'}</option>
                                    <option value="Clinica">{'Clinica'}</option>
                                    <option value="Hospital">
                                        {'Hospital'}
                                    </option>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="SearchOuterContainer2">
                            <FormControl>
                                <label>Servicios</label>
                                <Select
                                    focusBorderColor={'rgb(174 213 142)'}
                                    value={this.state.services}
                                    onChange={this.handleChange}
                                    name="services"
                                >
                                    <option value="">{'Cualquiera'}</option>
                                    <option value="Rayos X">{'Rayos X'}</option>
                                    <option value="Hospedaje">
                                        {'Hospedaje'}
                                    </option>
                                    <option value="Groominge">
                                        {'Groominge'}
                                    </option>
                                    <option value="Vacunacion">
                                        {'Vacunacion'}
                                    </option>
                                    <option value="Desparacitacion">
                                        {'Desparacitacion'}
                                    </option>
                                    <option value="Castraciones">
                                        {'Castraciones'}
                                    </option>
                                    <option value="Operacion">
                                        {'Operacion'}
                                    </option>
                                    <option value="Emergencias">
                                        {'Emergencias'}
                                    </option>
                                </Select>
                            </FormControl>
                        </div>
                        <Button
                            color="white"
                            background={'orange'}
                            onClick={() => this.applyFilters()}
                        >
                            Aplicar filtros
                        </Button>
                    </form>
                </>
            )
        }
    }

    const SeeSearch = () => {
        return (
            <div className="SearchBackgorund">
                <div className="SearchOuterContainer container">
                    <div className="SearchInfoContainer">
                        <div className="titleContainer">
                            <Heading className="title">Filtros</Heading>
                        </div>
                        <FilterFrom />
                    </div>
                </div>
                <div className="SearchOuterContainer3 container">
                    <div className="SearchInfoContainer">
                        <div className="titleContainer">
                            <Heading className="title">
                                Búsqueda de veterinarias
                            </Heading>
                        </div>
                    </div>

                    <div className="SearchGridContainer">
                        <div className="modalBtnDiv">
                            <Button
                                className="modalBtn"
                                style={styles.modalBtn}
                                onClick={onOpen}
                            >
                                Filtros
                            </Button>
                        </div>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalContent>
                                <div className="modalForm">
                                    <ModalHeader>Filtros</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <FilterFrom />
                                    </ModalBody>
                                </div>
                            </ModalContent>
                        </Modal>
                    </div>

                    <div className="CardsContainer">
                        {currentPosts !== null &&
                            currentPosts.map((vet) => {
                                return (
                                    <div key={vet['id']}>
                                        <CardComponent
                                            vet={vet}
                                            image="https://pbs.twimg.com/media/EWH0kEZWsAAWwvI.jpg"
                                            setSeePopup={setSeePopup}
                                            setSelectedVet={setSelectedVet}
                                        />
                                    </div>
                                )
                            })}
                    </div>
                    {posts !== null && (
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={posts.length}
                            paginate={paginate}
                        />
                    )}
                </div>
            </div>
        )
    }

    return (
        <>
            {!seePopup && (
                <div data-testid="search-id">
                    <div className="searchWrap">
                        <Input
                            value={value}
                            onChange={handleChange}
                            focusBorderColor="rgb(174 213 142)"
                            placeholder="Ingrese su búsqueda"
                        />
                        <Button
                            className="buttonS"
                            backgroundColor="#ea9a64"
                            _hover="rgb(174 213 142)"
                            _active={{
                                bg: 'rgb(174 213 142)',
                                borderColor: 'rgb(174, 213, 142)',
                            }}
                            color="#fff"
                            grid-column="8"
                            onClick={() => alert('HOLA :)')}
                        >
                            {' '}
                            &#x1F50D;{' '}
                        </Button>
                    </div>
                </div>
            )}
            {!seePopup && <SeeSearch />}
            {seePopup && (
                <VetPopup vet={selectedVet} regretOriginal={setSeePopup} />
            )}
        </>
    )
}

export default Search
