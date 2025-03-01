import React from 'react';
import { Users, Building2, Globe2, CheckCircle } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: <Users />, value: "500+", label: "Clients" },
    { icon: <Building2 />, value: "15+", label: "Années d'Expérience" },
    { icon: <Globe2 />, value: "50+", label: "Villes Couvertes" },
    { icon: <CheckCircle />, value: "1000+", label: "Projets Réalisés" }
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}