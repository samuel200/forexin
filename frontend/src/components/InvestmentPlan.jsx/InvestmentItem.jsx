import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function InvestmentItem({ planName, offer, min, max, referalBonus, color, style, itemOnClick }) {
    const [ ref, inView ] = useInView({
        threshold: .8,
        triggerOnce: true
    })
    const changedStyle = { top: "0px", opacity: 1} 
    return (
        <div id="investment-plan-item" style={{ borderBottomColor: color, ...style}} ref={ ref } onClick={ itemOnClick } >
            <h2 style={{ transitionDelay: "0s", color , ...(inView ? changedStyle : {} )}}>{planName} plan</h2>
            <p style={{ transitionDelay: ".2s" , ...(inView ? changedStyle : {} )}}>{ offer }</p>
            <p style={{ transitionDelay: ".4s" , ...(inView ? changedStyle : {} )}}>max: { max }</p>
            <p style={{ transitionDelay: ".6s" , ...(inView ? changedStyle : {} )}}>min: { min }</p>
            <p style={{ transitionDelay: ".8s" , ...(inView ? changedStyle : {} )}}>referal bonus: { referalBonus }</p>
        </div>
    )
}
