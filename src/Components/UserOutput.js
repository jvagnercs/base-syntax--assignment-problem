import React from 'react'

const userOutput = props => (
    <div>
        <p style={props.style}>1st paragraph</p>
        <p>User name:<br/> {props.children}</p>
    </div>
)

export default userOutput