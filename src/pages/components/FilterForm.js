import { Select, Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const FilterForm = ({ posts, setPosts }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // Obtener todas las variables
    const emergency = data.emerg === 'true' ? true : false
    const kind = data.kind
    const service = data.services
    const theTime = data.the_time
    
    // Filtrar si atiende emergencias o no
    let theVets = posts.filter((vet) => vet.emergency === emergency) 
    
    if(kind !== 'Nada'){ // Filtrar que tipo de veterinaria es
      theVets = theVets.filter((vet) => vet.vet_type === kind)
    }
    
    if(service !== ''){ // Filtrar el tipo de servicio que tienen
      theVets = theVets.filter((vet) => vet.services.includes(service))
    }

    if(theTime !== ''){ // Filtrar si la veterinaria esta dentro del rango
      theVets = theVets.filter((vet) => {
        const open_time = vet.open_time
        const close_time = vet.close_time

        const timeOpen = new Date('01/01/2022 ' + open_time).getTime()
        const timeClosed = new Date('01/01/2022 ' + close_time).getTime()
        const timeSelected = new Date('01/01/2022 ' + theTime).getTime()

        return timeSelected >= timeOpen && timeSelected <= timeClosed
      })
    }

    setPosts(theVets) // Insertar nueva data
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="SearchOuterContainer2">
        <label>Emergencia</label>
        <Select focusBorderColor={'rgb(174 213 142)'} {...register('emerg')}>
          <option value="true" onClick={() => console.log('PRUEBA TRUE')}>
            {'Si'}
          </option>
          <option value="false" onClick={() => console.log('PRUEBA FALSE')}>
            {'No'}
          </option>
        </Select>
      </div>

      <div className="SearchOuterContainer2">
        <label>Hora Disponibilidad</label>
        <br />
        <input type="time" {...register('the_time')} />
      </div>

      <div className="SearchOuterContainer2">
        <label>Tipo Veterinaria</label>
        <Select focusBorderColor={'rgb(174 213 142)'} {...register('kind')}>
          <option value="Nada">{'Cualquiera'}</option>
          <option value="Normal">{'Normal'}</option>
          <option value="Petshop">{'Petshop'}</option>
          <option value="Clinica">{'Clinica'}</option>
          <option value="Hospital">{'Hospital'}</option>
        </Select>
      </div>

      <div className="SearchOuterContainer2">
        <label>Servicios</label>
        <Select focusBorderColor={'rgb(174 213 142)'} {...register('services')}>
          <option value="">{'Cualquiera'}</option>
          <option value='Rayos X'>{'Rayos X'}</option>
          <option value='Hospedaje'>{'Hospedaje'}</option>
          <option value='Grooming'>{'Grooming'}</option>
          <option value='Vacunacion'>{'Vacunacion'}</option>
          <option value='Desparacitacion'>{'Desparacitacion'}</option>
          <option value='Castraciones'>{'Castraciones'}</option>
          <option value='Operacion'>{'Operacion'}</option>
          <option value='Emergencias'>{'Emergencias'}</option>
          <option value='Examenes Corporales'>{'Examenes Corporales'}</option>
        </Select>
      </div>
      <Button color="white" background={'orange'} type="submit">
        Aplicar filtros
      </Button>
    </form>
  )
}
