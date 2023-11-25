import React from 'react'

export default function Bar(props) {
    return (
        <div>
            <div className="text-black dark:text-white">{props.name}</div>
        </div>
    )
}
