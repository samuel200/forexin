import React from 'react';
import { useInView } from 'react-intersection-observer';
import AssetAllocation from './AssetAllocation'

export default function AssetDistribution() {
    const allocations = [
        {
            color: "#B673CF",
            content: "34% Blockchain"
        },
        {
            color: "#119FB9",
            content: "30% Stock and Comodities"
        },
        {
            color: "#3A8896",
            content: "15% Binary Options"
        },
        {
            color: "#CB517A",
            content: "11% Forex"
        },
        {
            color: "#34F4A6",
            content: "10% Others"
        },
    ]
    
    const [ ref, inView ] = useInView({
        threshold: .6,
        triggerOnce: true
    })

    const imageStyle = {
        position: "relative",
        right: "-25px",
        opacity: .1,
        transition: ".8s all",
        ...(inView ?
            {
                right: "0px",
                opacity: 1
            }
            :{})
    }

    return (
        <div id="allocation" ref={ ref }>
            <h2 className="heading">Asset Distribution</h2>
            <div id="allocation-section">
                <div id="allocation-holder">
                    {
                        allocations.map( (allocation, id) => <AssetAllocation 
                                                            id={ id }
                                                            inView={ inView }
                                                            color={ allocation.color }
                                                            content={ allocation.content }/>)
                    }
                </div>
                <img style={ imageStyle } src={ require("../../img/token-distribution.png")} alt="distribution chart"/>
            </div>
        </div>
    )
}
