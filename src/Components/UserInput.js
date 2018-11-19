import React from 'react'
import './UserInput.css'

const userInput = props => <input 
                                type="text"
                                onChange={props.changed}
                                value={props.initialValue}
                                className="userInput"
                            />

export default userInput