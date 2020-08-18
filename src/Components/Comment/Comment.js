import React, { useState } from 'react'
import CommentInp from "./CommentInp"
import CommentDisp from "./CommentDisp"
import "./Comment.css"

function Comment() {

    const [Input, setInput] = useState({result :[]})

    function commentAdd(element){
        setInput({result:[...Input.result,element]})        
    }

    return (
        <div>
            <div className="sh">Add a Comment</div>
            <CommentInp Add={commentAdd}></CommentInp>
            <CommentDisp Input={Input}></CommentDisp>
        </div>
    )
}

export default Comment
