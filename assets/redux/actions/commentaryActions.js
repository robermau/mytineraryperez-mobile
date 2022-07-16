import axios from 'axios';


const commentaryActions = {
   
    addComment: (comment,itineraryId) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {

            if (comment.comment !== "") {
                const res = await axios.post(`https://mi-tinerary-perez-backend.herokuapp.com/api/itinerary/comment`, { comment,itineraryId }, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message, 
                        success: res.data.success
                    }
                })
                return res
            }
            else {
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: "ingresa un comentario para guardarlo",
                        success: false
                    }
                })
            }
        }

    },
    modifyComment: (comment) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`https://mi-tinerary-perez-backend.herokuapp.com/api/itinerary/comment`, { comment }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    deleteComment: (id) => {
    //   console.log(id)
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://mi-tinerary-perez-backend.herokuapp.com/api/itineraries/comment/${id}`, {}, {
                headers: {
                    'Authorization': 'Bearer '+ token 
                }

            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

}

export default commentaryActions;