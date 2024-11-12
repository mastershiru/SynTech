import React from "react";
import Airbnb from "../assets/img/clients/airbnb.png";
import Google from "../assets/img/clients/google.png";
import Stripe from "../assets/img/clients/stripe.png";
import PayPal from "../assets/img/clients/paypal.png";
import Mailchimp from "../assets/img/clients/mailchimp.png";

export default function ClientSection() {
  const clients = [
    { imgSrc: Airbnb, alt: "Airbnb" },
    { imgSrc: Google, alt: "Google" },
    { imgSrc: Stripe, alt: "Stripe" },
    { imgSrc: PayPal, alt: "PayPal" },
    { imgSrc: Mailchimp, alt: "Mailchimp" },
  ];
  return (
    <div className="page-section client-section">
      <div className="container-fluid">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          {clients.map((client, index) => (
            <div className="item" key={index}>
              <img src={client.imgSrc} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
