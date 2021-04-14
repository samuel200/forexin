import React from 'react';

export default function AssetAllocation({ color, content, inView, id }) {

    const AllocationStyle = {
        color,
        borderLeft: `5px solid ${ color }`,
        padding: "15px",
        fontWeight: "bold",
        boxShadow: "0px 4px 10px #6F4CFC",
        position: "relative",
        left: "-25px",
        opacity: .1,
        transition: ".8s all",
        ...(inView ?
            {
                transitionDelay: `.${id*2}s`,
                left: "0px",
                opacity: 1
            }
            :{})
    }

    return (
        <div style={ AllocationStyle }>
            { content }
        </div>
    )
}
