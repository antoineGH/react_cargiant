export const fetchCar = async (id) => {
    let url = 'http://127.0.0.1:5000/api/car/' + id

    const response = await fetch(url);
    if (response.ok) {
        const responseJson = await response.json()
        return responseJson
    }
}