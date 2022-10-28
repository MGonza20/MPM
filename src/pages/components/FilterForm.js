import { Select, Button } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'

export const FilterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  //<input defaultValue="test" {...register("example")} />

  const onSubmit = (data) => {
    console.log(data)
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
          <option value="Rayos X">{'Rayos X'}</option>
          <option value="Hospedaje">{'Hospedaje'}</option>
          <option value="Groominge">{'Groominge'}</option>
          <option value="Vacunacion">{'Vacunacion'}</option>
          <option value="Desparacitacion">{'Desparacitacion'}</option>
          <option value="Castraciones">{'Castraciones'}</option>
          <option value="Operacion">{'Operacion'}</option>
          <option value="Emergencias">{'Emergencias'}</option>
        </Select>
      </div>
      <Button color="white" background={'orange'} type="submit">
        Aplicar filtros
      </Button>
    </form>
  )
}
