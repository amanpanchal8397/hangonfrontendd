import axios from "axios";
import { BASE_URL } from "../../config";
import {
  addToGroupFailure,
  addToGroupRequest,
  addToGroupSuccess,
  deleteChatFailure,
  deleteChatRequest,
  deleteChatSuccess,
  deleteMessageFailure,
  deleteMessageRequest,
  deleteMessageSuccess,
  fetchChatFailure,
  fetchChatRequest,
  fetchChatSuccess,
  fetchSingleChatFailure,
  fetchSingleChatRequest,
  fetchSingleChatSuccess,
  makeGroupFailure,
  makeGroupRequest,
  makeGroupSuccess,
  removeFromGroupFailure,
  removeFromGroupRequest,
  removeFromGroupSuccess,
  renameGroupFailure,
  renameGroupRequest,
  renameGroupSuccess,
  seenMessageFailure,
  seenMessageRequest,
  seenMessageSuccess,
  sendMessageFailure,
  sendMessageRequest,
  sendMessageSuccess
} from "../Reducers/Chat";

const token = localStorage.getItem("token");



export const addOrSeeChat = async (userId)  => {
  
  try {
    // console.log(userId)
    // dispatch(AddOrSeeRequest());
    const { data } = await axios.post(`${BASE_URL}/chat`, {
      userId,token
    },{
      withCredentials : true
    });
    
    return data.chat

    // dispatch(AddOrSeeSuccess(data?.chat));
  } catch (e) {
    console.log(e);
    // dispatch(AddOrSeeFailure(e.message));
  }
};
export const fetchChat = () => async (dispatch) => {
  try {
    dispatch(fetchChatRequest());
    const { data } = await axios.put(`${BASE_URL}/chats`, {
      token
    }, {
      withCredentials: true,
    });

    dispatch(fetchChatSuccess(data?.chats));
  } catch (e) {
    console.log(e);
    dispatch(fetchChatFailure(e.message));
  }
};
export const makeGroup = (name, users) => async (dispatch) => {
  try {
    dispatch(makeGroupRequest());

    const { data } = await axios.post(
      `${BASE_URL}/group`,
      {
        name,
        users,
        token
      },
      {
        withCredentials: true,
      }
    );
    

    dispatch(makeGroupSuccess(data?.chat));
  } catch (e) {
    console.log(e);
    dispatch(makeGroupFailure(e.message));
  }
};
export const renameGroup = ( chatId ,chatName) => async (dispatch) => {
  try {
 
    dispatch(renameGroupRequest());
  
    const { data } = await axios.put(
      `${BASE_URL}/renamegroup`,
      {
        chatName,
        chatId,
        token
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch(renameGroupSuccess(data.message));
  } catch (e) {
    console.log(e);
    dispatch(renameGroupFailure(e.message));
  }
};
export const addToGroup = (userId, chatId) => async (dispatch) => {
  try {
    dispatch(addToGroupRequest());
    const { data } = await axios.put(
      `${BASE_URL}/addtogroup`,
      {
        userId,
        chatId,
        token
      },
      {
        withCredentials: true,
      }
    );
   
    dispatch(addToGroupSuccess(data.message));
  } catch (e) {
    console.log(e);
    dispatch(addToGroupFailure(e.message));
  }
};

export const removeFromGroup = (userId, chatId) => async (dispatch) => {
  try {
    dispatch(removeFromGroupRequest());
    
    const {data} = await axios.put(`${BASE_URL}/removefromgroup`,{
      userId,chatId,token
    },{
      withCredentials : true
    });
    dispatch(removeFromGroupSuccess(data.message))
  } catch (e) {
    console.log(e);
    dispatch(removeFromGroupFailure(e));
  }
};
export const allMessage =async (id) =>  {
  try {
    // dispatch(allMessageRequest());
    const { data } = await axios.put(
      `${BASE_URL}/allmessage/${id}`, {token},
      {
        withCredentials: true,
      }
    );
    return data?.chats
    // dispatch(allMessageSuccess(data?.chats));
  } catch (e) {
    console.log(e);
    // dispatch(allMessageFailure(e.message));
  }
};
export const sendMessage = (chatId, content) => async (dispatch) => {
  try {
    dispatch(sendMessageRequest());

    const { data } = await axios.post(
      `${BASE_URL}/sendmessage`,
      {
        content,
        chatId,token
      },
      {
        withCredentials: true,
      }
    );
    
    dispatch(sendMessageSuccess(data.message));
  } catch (e) {
    console.log(e);
    dispatch(sendMessageFailure(e.message));
  }
};

export const deleteChat = (chatId) => async(dispatch)=>{ 
  try {
   
    dispatch(deleteChatRequest());
    const {data} = await axios.put(`${BASE_URL}/deletechat`,{
      chatId,token

    },{
      withCredentials : true
    })
    console.log(data,'the deletedchat')
    dispatch(deleteChatSuccess(data.message))

  }catch(e){
    dispatch(deleteChatFailure(e.message))
  }

}
export const seenMessage = (chatId,userId) =>async (dispatch) =>{
  try {
    dispatch(seenMessageRequest());
    
    const {data} = await axios.put(`${BASE_URL}/seenmessage`,{
      chatId,userId,token
    },{
      withCredentials : true
    })
 
    dispatch(seenMessageSuccess(data.message))

  }catch(e){
    console.log(e);
    dispatch(seenMessageFailure(e.message))

  }
}
export const deleteMessage = (chatId) =>async (dispatch) =>{
  try {
    
    dispatch(deleteMessageRequest());
    
    const {data} = await axios.put(`${BASE_URL}/deleteuserchat`,{
      chatId,token
    },{
      withCredentials : true
    })
    console.log(data);
    dispatch(deleteMessageSuccess(data.message))

  }catch(e){
    console.log(e);
    dispatch(deleteMessageFailure(e.message))

  }
}
export const fetchSingleChat = (chatId) =>async (dispatch) =>{
  try {
    
    dispatch(fetchSingleChatRequest());
    
    const { data } = await axios.put(
     ` ${BASE_URL}/singlechat`,
      {
        chatId,token
      },
      {
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch(fetchSingleChatSuccess(data.chat))

  }catch(e){
    console.log(e);
    dispatch(fetchSingleChatFailure(e.message))

  }
}