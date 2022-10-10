// Obtener vets desde el backend
import GetVets from './GetVets'

const FetchVets = async (setter) => {
    const data = await GetVets()
    if (!data['success']) {
        alert(data['error'])
    } else {
        setter(data['data'])
    }
}

export default FetchVets
