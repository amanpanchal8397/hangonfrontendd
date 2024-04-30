import io  from 'socket.io-client';
import { BASE } from './config';

const endPoint = BASE;

export const socket = io(endPoint)

export const socketInitial = (user) =>{
    try {
        console.log("socketinidtion")
        if(user?._id) {
            socket.emit('setup', user) ;
        }
    }catch(e){
        console.log(e.message)
    }

}