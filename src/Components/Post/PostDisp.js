import React from 'react'
import Comment from "../Comment/Comment"
import Like from "../Like"

function PostDisp(props) {
    return (
        <div className="disp">
            {props.Input.result.map((item,i) => {
                    return (
                        <div key={i}>
                        <div >{item}</div>
                        <Like></Like>
                        <Comment></Comment>
                        </div>)
                })}
            
        </div>
    )
}

export default PostDisp
