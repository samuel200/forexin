import React from 'react'
import ServiceItem from './ServiceItem'

export default function Services() {
    const services = [
        {
            image_url: require("../../img/security_icon.png"),
            topic: "Security",
            serviceContent: "We employed expert security to ensure your investment with us are safe.",
        },
        {
            image_url: require("../../img/24hrs_icon.png"),
            topic: "Support 24/7",
            serviceContent: "We guarantee you of our expert support both day and night. All you need is to write to us using the email address provided in the contact page.",
        },
        {
            image_url: require("../../img/payment_icon.png"),
            topic: "Payment Methods",
            serviceContent: "We payout instantly. All requested payment made are usually processed and paid in the equivalent cryptocurrency it was invested.",
        },
        {
            image_url: require("../../img/investment_icon.png"),
            topic: "Investment Projects",
            serviceContent: "Bitcoin investment opportunities exist outside of simply speculating on the Bitcoin.",
        },
        {
            image_url: require("../../img/cryptocurrency_icon.png"),
            topic: "Cryptocurrency Investment",
            serviceContent: "You can invest only on the accepteble cryptocurrency. Check out our investment plans.",
        },
        {
            image_url: require("../../img/data_protection_icon.png"),
            topic: "Data Protection",
            serviceContent: "All of your data is protected with strong encryption and we asure you have nothing to be afraid of.",
        },
    ]
    return (
        <section id="services">
            <h2 className="heading">Some Of The Services We Offer</h2>
            <div id="services-holder">
                {
                services.map( service => <ServiceItem image_url={ service.image_url }
                                                      topic={ service.topic }
                                                      serviceContent={ service.serviceContent }/>)
                }
            </div>
        </section>
    )
}
