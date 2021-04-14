import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function ServiceItem({ image_url, topic, serviceContent}) {
    const [ ref, inView ] = useInView({
        threshold: .6,
        triggerOnce: true
    })
    const changedStyle = { top: "0px", opacity: 1} 
    const startingStyle= {
        position: "relative",
        top: "-25px",
        opacity: .1,
        transition: ".8s all"
    }

    return (
        <div className="service-item" ref={ ref }>
            <img src={ image_url} alt={ topic+"image" }  style={{ ...startingStyle, transitionDelay: ".8s", ...(inView ? changedStyle : {} )}}/>
            <h3 className="topic"  style={{ ...startingStyle, transitionDelay: ".2s",  ...(inView ? changedStyle : {} )}}>{ topic }</h3>
            <p className="service-content"  style={{ ...startingStyle, transitionDelay: ".4s", ...(inView ? changedStyle : {} )}}>{ serviceContent }</p>
        </div>
    )
}
