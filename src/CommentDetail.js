import React from 'react'

export const CommentDetail = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author">{props.name}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.comment}
      </div>
                </div>
            </div>
        </div>
    )
}
