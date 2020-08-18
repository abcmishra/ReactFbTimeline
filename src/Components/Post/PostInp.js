import React,{useState} from 'react'
import "./Post.css"

function PostInp(props) {

    const [entry,setEntry] = useState("")

    function onChange(e){
        setEntry(e.target.value)
    }

    function Submit(){
        props.Add(entry)
        setEntry("")
    }

    return (
        <div>
            <input className="inp" type="text" placeholder="What's On Your Mind ........." size="30" onChange={onChange}></input>
            <button className="btnP" type="Post" onClick={Submit}>Add a Post</button>
        </div>
    )
}

export default PostInp
