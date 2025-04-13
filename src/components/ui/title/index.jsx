import React from 'react'
import style from './style.module.css'

export const Title = (props) => {
    const setMapTag = {
        l: "h2",
        m: "h3",
        s: "h4"
    }

    const setMapSize = {
        l: "large",
        m: "medium",
        s: "small"
    }
  
    return React.createElement(setMapTag[props.size], {className: style[setMapSize[props.size]]}, props.text);
}
