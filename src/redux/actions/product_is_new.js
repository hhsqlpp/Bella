import {Types} from './types'
import axios from 'axios'

export const setProductIsNew = (data) => ({
    type: Types.SET_PRODUCT_IS_NEW_SUCCESS,
    payload: data
})

const url = 'http://codersbella.sunrisestudio.pro/product/is_new/'

export const fetchProductIsNew = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try{
        const res = await axios.get(url, config)
        dispatch(setProductIsNew(res.data))
    } catch(e) {
        console.log(e)
        dispatch({
            type: Types.SET_PRODUCT_IS_NEW_FAIL
        })
    }
}