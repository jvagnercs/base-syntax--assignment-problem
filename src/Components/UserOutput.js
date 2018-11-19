import React from 'react'

const userOutput = props => (
    <div>
        <p style={props.style}>1st paragraph</p>
        <p>2nd paragraph:<br/> {props.children}</p>
    </div>
)

export default userOutput