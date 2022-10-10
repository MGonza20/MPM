const GetVets = () => {
    return fetch('http://localhost:5000/api/vets')
        .then((response) => response.json())
        .then((result) => {
            return { data: result.data, success: true }
        })
        .catch((error) => {
            return {
                error: 'Error inesperado con los vets: ' + error,
                success: false,
            }
        })
}

export default GetVets
