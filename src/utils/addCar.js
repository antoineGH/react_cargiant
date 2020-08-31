export const addCar = async (dataRaw) => {
    const urlToFetch = "http://127.0.0.1:5000/api/cars";
    const data = JSON.stringify(dataRaw);
    try {
        const response = await fetch(urlToFetch, {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data, 
        }) 
        return response;
    } catch (e) {
        console.log(e)
    }
}