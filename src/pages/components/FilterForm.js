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
    const emergency = data.emerg === 'true' ? true : false
    const kind = data.kind
    const service = data.services
    // const theTime = data.the_time

    const theVets = posts.filter(
      (vet) =>
        vet.emergency === emergency &&
        vet.services.includes(service) &&
        vet.kind === kind
    )
    console.log(theVets)
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
          <option value="rayos_x">{'Rayos X'}</option>
          <option value="hospedaje">{'Hospedaje'}</option>
          <option value="groominge">{'Groominge'}</option>
          <option value="vacunacion">{'Vacunacion'}</option>
          <option value="desparacitacion">{'Desparacitacion'}</option>
          <option value="castraciones">{'Castraciones'}</option>
          <option value="operacion">{'Operacion'}</option>
          <option value="emergencias">{'Emergencias'}</option>
          <option value="examenes_corporales">{'Examenes Corporales'}</option>
        </Select>
      </div>
      <Button color="white" background={'orange'} type="submit">
        Aplicar filtros
      </Button>
    </form>
  )
}
