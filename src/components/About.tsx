
import { CheckCircle } from 'lucide-react';

export function About() {
  const features = [
    "Support Technique 24/7",
    "99.9% de Disponibilité Réseau",
    "Experts en Sécurité Certifiés",
    "Solutions Personnalisées",
    "Prix Compétitifs",
    "Technologie de Pointe"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="À propos de Gritel Maroc"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg hidden md:block">
              <p className="text-2xl font-bold">15+ Ans</p>
              <p>d'Excellence</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">À Propos de Gritel Maroc</h2>
            <p className="text-gray-600 mb-6">
              Depuis notre création, Gritel Maroc est à l'avant-garde de l'innovation technologique au Maroc. 
              Nous sommes spécialisés dans la fourniture d'infrastructures informatiques de pointe, de solutions 
              de sécurité et de services de transformation digitale aux entreprises à travers le pays.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}