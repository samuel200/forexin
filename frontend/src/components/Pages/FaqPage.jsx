import React, { useEffect } from 'react';
import $ from 'jquery';
import { useInView } from 'react-intersection-observer';
import FAQ from '../FAQ/FAQ';
import FootSection from '../FootSection/FootSection';

export default function FaqPage() {
    useEffect(()=>{
        
        $('.page-holder').on("load", ()=>{
        $("#navigation-bar").css({display: "flex"})
        $("#to-top").css({display: "block"})
        $("canvas").css({display: "block"})
      })
    }, [])
    
    const faqs = [
        {
            name: "general",
            faqs: [
                {
                    question: "What is GLOBALTRADES?",
                    answer: "GLOBALTRADES is a professional trading & investment company with emphasis on cryptocurrency, forex, binary option, CFDs. We are a group of qualified and trained financiers with technical knowledge. We actively monitor and trade the forex market, binary option, CFDs. The vast majority of customer deposits are stored offline in air-gapped cold storage. We only keep enough online to facilitate active trading, which greatly minimizes risk and exposure. Our auditing programs monitor every activity 24/7/365. Their job is to report and block any suspicious activity before it becomes a problem. We have strong roots and believe in customer service and transparency. We are committed to optimum delivery and uprightness. We let our service do the talking. Any funds you put into GLOBALTRADES are only used to facilitate trading through your account. Unlike banks, we do not operate on fractional reserves."
                },
                {
                    question: "How do i make money here?",
                    answer: "We provide individuals and businesses a world class experience to earn weekly/monthly passive income or otherwise decide to compound profits for improved returns. The more money you deposit, the more money you make. The profit is generated from trading cryptocurrencies as well as forex, CFDs, binary options in registered exchanges."
                },
                {
                    question: "Is using GLOBALTRADES free of charge?",
                    answer: "Yes, it is totally free of charge."
                },
                {
                    question: "Is GLOBALTRADES a legitimate company?",
                    answer: "GLOBALTRADES Technologies is a legal investment company incorporated in Czech Republic and licensed to operate in all regions and countries worldwide."
                },
            ]
        },
        {
            name: "account",
            faqs: [
                {
                    question: "What's the limit to the number of accounts i own?",
                    answer: "Any client can have any number of accounts they wish to as long as they keep them funded."
                },
                {
                    question: "I'm having problems registering an account?",
                    answer: "Check the entered information is correct & accurate. Displayed errors can help you, they show where you have made mistakes. Sometimes it could be issues with your browser. Try to change your browser or turn off any translator if you use one. If you need further assistance don't hesitate to contact us."
                },
                {
                    question: "What is the minimum deposit amount?",
                    answer: "The minimum that you can deposit is $100 per processor. The maximum amount you can deposit in your account is $300,000. Kindly refer to our awesome plans for more information on this or contact us if you have further questions concerning our plans"
                },
                {
                    question: "How do i withdraw my earnings?",
                    answer: "Payouts are sent to you automatically when you request a withdrawal depending on your agreed schedule and will be to your provided payment details."
                },
            ]
        },
        {
            name: "investments",
            faqs: [
                {
                    question: "Who is eligible to invest?",
                    answer: "GLOBALTRADES is open to everyone of legal age to make investments and financial decisions for themselves. You are responsible for making sure that you comply with local laws."
                },
                {
                    question: "How much can i make?",
                    answer: "The rates of income depends on the amount you invest.For more information, you can view our awesome investmenyt plans and their corresponding earnings."
                },
                {
                    question: "What is the minimum investment?",
                    answer: "The minimum that you can deposit is $100 per processor. The maximum amount you can deposit in your account is $300,000. Kindly refer to our awesome plans for more information on this or contact us if you have further questions concerning our plans."
                },
            ]
        },
        {
            name: "legal",
            faqs: [
                {
                    question: "Who is eligible to invest?",
                    answer: "GLOBALTRADES is open to everyone of legal age to make investments and financial decisions for themselves. You are responsible for making sure that you comply with local laws."
                }
            ]
        }
    ]
    return (
        <div>
            <section id="faq-section">
                <div>
                    <h2 className="heading">frequently asked questions</h2>
                    <p>
                        Below we’ve provided answers to the most frequently asked questions. 
                        If you have any other questions, please get in touch.
                    </p>
                </div>
                {
                    faqs.map(faq=>{
                        const [ ref, inView ] = useInView({
                            threshold: .5,
                            triggerOnce: true
                        })
    
                        const startingStyle= {
                            position: "relative",
                            top: "60px",
                            opacity: .1,
                            transition: ".8s all",
                            ...(inView ? 
                                {
                                    top: "0px",
                                    opacity: 1
                                }:{})
                        }

                        return(
                            <div ref={ ref }>
                                <h2 style={{margin: "50px auto", ...startingStyle}}className="heading">{ faq.name }</h2>
                                {
                                    faq.faqs.map( ({question, answer}, id)=> <FAQ question={ question } answer={ answer } inView={ inView }/>)
                                }
                            </div>
                        )
                    })
                }
            </section>
            <FootSection />
        </div>
    )
}
