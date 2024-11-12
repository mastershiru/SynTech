import React, { useState, useEffect } from "react";

export default function Counter() {
  const counters = [
    { label: "Total Invest", value: 816278, prefix: "$" },
    { label: "Yearly Revenue", value: 216422, prefix: "$" },
    { label: "Growth Ratio", value: 73, suffix: "%" },
  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    counters.forEach((counter, index) => {
      let start = 0;
      const end = counter.value;
      const increment = end / 100;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          start = end;
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 20);

      return () => clearInterval(timer);
    });
  }, []);
  return (
    <div className="page-section counter-section">
      <div className="container">
        <div className="row align-items-center text-center">
          {counters.map((counter, index) => (
            <div key={index} className="col-lg-4">
              <p>{counter.label}</p>
              <h2>
                {counter.prefix || ""}
                <span className="number">{counts[index]}</span>
                {counter.suffix || ""}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
