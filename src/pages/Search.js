import React, { useState, useEffect, useContext } from 'react'
import CardComponent from './components/CardComponent'
import Pagination from './components/Pagination'
import VetPopup from './VetPopup'
import '../styles/search.css'
import { FilterForm } from './components/FilterForm'
//import { vetsFilter } from '../../backend/controllers/vetController'

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
  useDisclosure
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
      fontSize: '17px'
    },
    pagination: {
      listStyle: 'none'
    }
  }

  const filterVet = () => {
    const theVets = posts.filter((vet) => vet.name.includes(value))
    setPosts(theVets)
  }

  const SeeSearch = () => {
    return (
      <div className="SearchBackgorund">
        <div className="SearchOuterContainer container">
          <div className="SearchInfoContainer">
            <div className="titleContainer">
              <Heading className="title">Filtros</Heading>
            </div>
            <FilterForm />
          </div>
        </div>
        <div className="SearchOuterContainer3 container">
          <div className="SearchInfoContainer">
            <div className="titleContainer">
              <Heading className="title">Búsqueda de veterinarias</Heading>
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
                    <FilterForm />
                  </ModalBody>
                </div>
              </ModalContent>
            </Modal>
          </div>

          <div className="CardsContainer">
            {currentPosts !== null &&
              currentPosts.map((vet) => {
                return (
                  <div key={vet['id']} data-testid="render-card">
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
              data-testid="barrita"
            />
            <Button
              data-testid="botoncito"
              className="buttonS"
              backgroundColor="#ea9a64"
              _hover="rgb(174 213 142)"
              _active={{
                bg: 'rgb(174 213 142)',
                borderColor: 'rgb(174, 213, 142)'
              }}
              color="#fff"
              grid-column="8"
              onClick={filterVet}
            >
              {' '}
              &#x1F50D;{' '}
            </Button>
          </div>
        </div>
      )}
      {!seePopup && <SeeSearch />}
      {seePopup && <VetPopup vet={selectedVet} regretOriginal={setSeePopup} />}
    </>
  )
}

export default Search
