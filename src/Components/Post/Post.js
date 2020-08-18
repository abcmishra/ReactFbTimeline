import React,{useState} from 'react'
import PostInp from "./PostInp"
import PostDisp from "./PostDisp"
import "./Post.css"

function Post() {
    const [Input, setInput] = useState({result :[]})

    function postAdd(element){
        setInput({result:[...Input.result,element]})        
    }

    return (
        <div>
            <div className="heading">TimeLine</div>
            <PostInp  Add={postAdd}></PostInp>
            <PostDisp  Input={Input}></PostDisp>
        </div>
    )
}

export default Post
