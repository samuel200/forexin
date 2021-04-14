import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

export default function MainScreen() {
    const[ ref, inView ] = useInView({
        threshold: .2,
        triggerOnce: true
    })
    return (
        <section id="main-screen">
            <section ref={ ref } id="main-screen-container" className={inView ? "about-in-view": ""}>
                <h1>Decentralized Trading &amp; Investment platform with blockchain infrastructure</h1>
                <p><b>GLOBALTRADES</b> is an investment firm whose focus is on projects related to Bitcoin and Blockchain technologies...</p>
                <Link to="/signup">Let’s Get Started</Link>
            </section>
        </section>
    )
}
