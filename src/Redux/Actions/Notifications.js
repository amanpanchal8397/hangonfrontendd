import axios from "axios";
import { BASE_URL } from "../../config";
import { getNotificationsFailure, getNotificationsRequest, getNotificationsSuccess, seenNotificationFailure, seenNotificationRequest, seenNotificationSuccess } from "../Reducers/Notifications";

const token = localStorage.getItem("token");

export const seenNotifications = () =>async (dispatch) =>{
    try {
        dispatch(seenNotificationRequest());
        const { data } = await axios.post(`${BASE_URL}/notifications`, {
            token
        },{
            withCredentials : true
        })
        dispatch(seenNotificationSuccess(data.notifications))
    }catch(e){
        dispatch(seenNotificationFailure(e.message))
    }
}
export const allNotifications = () =>async (dispatch) =>{
    try {
        dispatch(getNotificationsRequest());
        const { data } = await axios.put(`${BASE_URL}/notifications`, {
            token
        },{
            withCredentials : true
        })
        
        dispatch(getNotificationsSuccess(data.notifications))
    }catch(e){
        dispatch(getNotificationsFailure(e.message))
    }
}