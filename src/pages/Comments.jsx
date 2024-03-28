import React, {useState, useEffect} from 'react'
function Comments({socket, username, room}) {
    const [currentComment, setCurrentComment] = useState("")
    const [commentList, setcommentList] = useState([])

  async function sendComment(){
    if(currentComment!==""){
        const commentData = {
            room:room,
            author:username,
            comment:currentComment,
            time:new Date(Date.now()).getHours() + ":"
            + new Date(Date.now()).getMinutes()
        }
        await socket.emit("send_message", commentData)
        setcommentList((list)=>[...list, commentData])
        setCurrentComment("")
    }
  }
 useEffect(()=>{
    socket.on("receive_message", (data)=>{
        setcommentList((list)=>[...list, data])
    })
 },[socket])
    
  return (
    <div className='chat-window'>
        <div className="chat-body">
            <ScrollToBottom className="message-container">
                {commentList.map((commentContent)=>{
                    return <div className="message" 
                    id={username===commentContent.author?"you":"other"}>
                    <div>
                        <div className="message-content">
                            <p>{commentContent}</p>

                        </div>
                        <div className="message-meta">
                            <p id="time">{commentContent.time}</p>
                            <p id="author">{commentContent.author}</p>
                        </div>

                    </div>
                    </div>
                })

                }
            </ScrollToBottom>
        </div>
        <div className="chat-footer">
            <input type="text" value={currentComment} 
            placeholder='write a comemnt...'
            onChange={(e)=>setCurrentComment(e.target.value)}/>
            <button onClick={sendComment}>comment</button>
        </div>
    </div>
  )
}

export default Comments