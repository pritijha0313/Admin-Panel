import { useState } from "react";
import servicesData from "../../data/Services.json";

const Services = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-[#101557]">Services</h1>

      {servicesData.map((s, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
          onClick={() => setOpen(open === i ? null : i)}
        >
        
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <span className="text-xl">{open === i ? "−" : "+"}</span>
          </div>

          {open === i && (
            <div className="mt-3 text-gray-600">
              <p>{s.description}</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                {s.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Services;
