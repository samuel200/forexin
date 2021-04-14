import React from 'react';
import { useInView } from 'react-intersection-observer';
import IllustrationSide from './IllustrationSide';
import ContactContent from './ContactContent';

export default function ContactUs({ style }) {
    const [ ref, inView ] = useInView({
        threshold: .4,
        triggerOnce: true
    })
    return (
        <section style={ style } id="contact-us" ref={ ref }>
            <IllustrationSide inView={ inView }/>
            <ContactContent inView={ inView }/>
        </section>
    )
}
