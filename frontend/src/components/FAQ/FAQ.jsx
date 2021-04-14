import React from 'react';

const generateRandom = ()=>{
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    for (var i = letters.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = letters[i];
        letters[i] = letters[j];
        letters[j] = temp;
    }
    return letters.join("").substring(0, 5);
}

export default function FAQ({ question, answer, id, inView }) {
    const identifier = generateRandom();
    const changedStyle = { top: "0px", opacity: 1} 
    const startingStyle= {
        position: "relative",
        top: "40px",
        opacity: .1,
        transition: ".8s all"
    }

    return (
        <div className="accordion" id="accordionExample" style={{
            ...startingStyle,
            ...(inView? {
                transitionDelay: `.${id*2}s`,
                ...changedStyle
            }:{})
        }}>
            <div className="card">
                <div className="card-header ">
                <h2 className="mb-0">
                    <button className="btn collapsed" type="button" data-toggle="collapse" data-target={"#"+identifier} aria-expanded="false" aria-controls={ identifier }>
                     { question }
                    </button>
                </h2>
                </div>

                <div id={ identifier } className="collapse" aria-labelledby={ identifier } data-parent="#accordionExample">
                <div className="card-body">
                    { answer }
                </div>
                </div>
            </div>
        </div>
    )
}
