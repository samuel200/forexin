import React from 'react';
import IllustrationSide from './IllustrationSide';
import AboutContentSide from './AboutContentSide';
import { useInView } from 'react-intersection-observer';

export default function AboutUs({ style }) {
    const [ ref, inView ] = useInView({
        threshold: .4,
        triggerOnce: true
    })
    return (
        <div id="about-us" ref={ ref } style={ style }>
            <IllustrationSide inView={ inView }/>
            <AboutContentSide inView={ inView }/>
        </div>
    )
}
