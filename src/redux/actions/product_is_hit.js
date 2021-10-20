import {Types} from "./types";
import axios from "axios";

export const setProductIsHit = (data) => ({
    type: Types.SET_PRODUCT_IS_HIT_SUCCESS,
    payload: data
})

const url = 'http://codersbella.sunrisestudio.pro/product/is_hit/'

export const fetchProductIsHit = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try{
        const res = await axios.get(url, config)
        dispatch(setProductIsHit(res.data))
    } catch(e) {
        console.log(e)
        dispatch({
            type: Types.SET_PRODUCT_IS_HIT_FAIL
        })
    }

}