import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/hero.scss";

const slides = [
  {
    title: "Raise Funds For What Matters",
    text: "Empathra Network connects people who need help with people willing to support meaningful causes.",
    image: "/images/hero1.jpeg",
  },
  {
    title: "Support Communities Worldwide",
    text: "Start a fundraiser for medical emergencies, education, or community projects.",
    image: "/images/hero2.jpeg",
  },
  {
    title: "Together We Can Make A Change",
    text: "Join thousands of donors helping individuals and communities achieve their goals.",
    image: "/images/hero3.jpeg",
  },
];

const Hero = () => {

  const [current,setCurrent] = useState(0);

  useEffect(()=>{

    const interval = setInterval(()=>{

      setCurrent((prev)=>(prev + 1) % slides.length);

    },5000);

    return ()=> clearInterval(interval);

  },[])

  const slide = slides[current];

  return (

    <section
      className="hero"
      style={{
        backgroundImage: `url(${slide.image})`
      }}
    >

      <div className="hero-overlay">

        <div className="hero-content">

          <h1>{slide.title}</h1>

          <p>{slide.text}</p>

          <div className="hero-buttons">

            <Link to="/donate">
              <button className="primary-btn">
                Make A Donation
              </button>
            </Link>

            <Link to="/">
              <button className="secondary-btn">
                Explore Campaigns
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;