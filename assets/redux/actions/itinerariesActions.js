import axios from 'axios';

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mi-tinerary-perez-backend.herokuapp.com/api/itineraries`)
            console.log(res)
            dispatch({ type: 'GET_ITINERARIES', payload: res.data.response.itineraries })
        }
    },
    getOneItineraries: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mi-tinerary-perez-backend.herokuapp.com/api/itinerary/${id}`)
            console.log(res)
            dispatch({ type: 'GET_ONE_ITINERARY', payload: res.data.response })
            return res
        }
    },
    findItinerariesFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://mi-tinerary-perez-backend.herokuapp.com/api/itinerariesbycities/${id}`)
            // console.log(res)
            dispatch({ type: 'FIND_ITINERARIES_FROM_CITY', payload: res.data.response })
            return res
        } 
        
    },
    likeDislike: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async () => {
            try {
                let response = await axios.put(`https://mi-tinerary-perez-backend.herokuapp.com/api/itineraries/likes/${id}`, {},
                {
                headers: {
                    Authorization: "Bearer "+token
                    }
                })
                console.log(response)
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions