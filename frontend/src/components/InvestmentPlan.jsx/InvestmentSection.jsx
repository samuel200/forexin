import React from 'react';
import InvestmentItem from './InvestmentItem';

export default function InvestmentSection({ style, investmentItemStyle, itemOnClick, itemOnMouseOver }) {
    const investmentPlans = [
        {
            planName: "1st", 
            offer: "13% after 30days", 
            min: "$500", 
            max: "$999", 
            referalBonus: "10%", 
            color: "#B79043"
        },
        {
            planName: "2nd", 
            offer: "19% after 30days", 
            min: "$1,000", 
            max: "$2,999", 
            referalBonus: "10%", 
            color: "#7F826D"
        },
        {
            planName: "3rd", 
            offer: "25% after 30days", 
            min: "$3,000", 
            max: "$4,999", 
            referalBonus: "10%", 
            color: "#98A830"
        },
        {
            planName: "4th", 
            offer: "31% after 30days", 
            min: "$5,000", 
            max: "$9,999", 
            referalBonus: "10%", 
            color: "#7F826D"
        },
        {
            planName: "5th", 
            offer: "35% after 30days", 
            min: "$10,000", 
            max: "$19,999", 
            referalBonus: "10%", 
            color: "#98A830"
        },
        {
            planName: "6th", 
            offer: "40% after 30days", 
            min: "$20,000", 
            max: "$50,000", 
            referalBonus: "10%", 
            color: "#7F826D"
        }
    ]
    return (
        <section id="investment-plan" style={ style }>
            <h2 className="heading">Our Awesome Investment Plans</h2>
            <div id="investment-card-holder">
                {
                    investmentPlans.map( ({ planName, offer, min, max, referalBonus, color }, id) => <InvestmentItem planName={ planName }
                                                                                                                     offer={ offer }
                                                                                                                     min={ min }
                                                                                                                     max={ max }
                                                                                                                     referalBonus={ referalBonus }
                                                                                                                     color={ color } 
                                                                                                                     style={ investmentItemStyle }
                                                                                                                     itemOnClick={ itemOnClick }/>)
                }
            </div>
        </section>
    )
}
