import { useEffect, useState, type JSX } from "react";
import { FaDonate, FaUsers, FaHandHoldingHeart, FaGlobe } from "react-icons/fa";
import "../styles/stats.scss";

interface Stat {
  label: string;
  value: number;
  icon: JSX.Element;
  prefix?: string;
}

const stats: Stat[] = [
  {
    label: "Total Raised",
    value: 2300000,
    icon: <FaDonate />,
    prefix: "$"
  },
  {
    label: "Active Campaigns",
    value: 850,
    icon: <FaHandHoldingHeart />
  },
  {
    label: "Donors",
    value: 12500,
    icon: <FaUsers />
  },
  {
    label: "Communities Helped",
    value: 320,
    icon: <FaGlobe />
  }
];

const ImpactStats = () => {

  const [counts,setCounts] = useState(stats.map(()=>0));

  useEffect(()=>{

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat,i)=>{

      let current = 0;
      const increment = stat.value / steps;

      return setInterval(()=>{

        current += increment;

        setCounts(prev=>{
          const updated = [...prev];
          updated[i] = Math.min(Math.floor(current), stat.value);
          return updated;
        });

      },interval);

    });

    setTimeout(()=>timers.forEach(clearInterval),duration);

    return ()=> timers.forEach(clearInterval);

  },[])

  return (

    <section className="impact">

      <div className="impact-header">

        <h2>Our Community Impact</h2>

        <p>
          Together we are making a real difference in
          people's lives through collective generosity.
        </p>

      </div>

      <div className="impact-grid">

        {stats.map((stat,index)=>(
          <div key={stat.label} className="impact-card">

            <div className="impact-icon">
              {stat.icon}
            </div>

            <h3>
              {stat.prefix ?? ""}
              {counts[index].toLocaleString()}
            </h3>

            <p>{stat.label}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default ImpactStats;