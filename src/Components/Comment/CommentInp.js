import React, { useState } from 'react'

function CommentInp(props) {

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
            <input  classname="inpC" type="text" onChange={onChange}></input>
            <button className="btn" type="button" onClick={Submit}>Add a Comment</button>            
        </div>
    )
}

export default CommentInp
