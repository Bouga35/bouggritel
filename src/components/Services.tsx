import  { useState } from 'react';
import { X, ChevronRight, Server, Shield, Wifi, Cloud, Zap, Construction } from 'lucide-react';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceDetail {
  title: string;
  description: string;
  content: string;
  image: string;
}

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services = [
    {
      icon: <Server className="w-12 h-12 text-blue-500" />,
      title: "Solutions d'Infrastructure",
      description: "Services d'infrastructure et de réseau de qualité professionnelle adaptés à vos besoins.",
      content: "Gritel est votre partenaire pour l'entretien, la maintenance, la fourniture et l'installation des équipements d'infrastructure. Nous sommes agréés par l'État et bien classés dans les marchés publics. Avec un capital de 7.000.000 DH, nous vous accompagnons pour réaliser votre projet cadré par la qualité attendue.",
      image: "https://www.collierscanada.com/-/media/images/colliers/canada/images/research-weekly-insights/toronto-construction-hero.ashx?sc_lang=fr-ca&bid=f329cb17d2b142d5be0dd65076851e6c&hash=AEC374C0E21408F6D9B68758B9BAFB3D"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Services de Sécurité",
      description: "Solutions de sécurité complètes pour protéger vos actifs numériques.",
      content: "Nous proposons des solutions de sécurité complètes pour protéger vos infrastructures critiques. Notre équipe d'experts en sécurité assure la protection de vos données et systèmes contre les menaces actuelles et émergentes.",
      image: "https://www.safetymypriority.be/wp-content/uploads/2020/09/shutterstock_320022929-800x450.jpg"
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Connectivité",
      description: "Solutions de connectivité Internet et réseau à haute vitesse.",
      content: "Quelquesoit la technologique (2G,3G,4G), nos équipes sont à votre disposition pour livrer un produit à partir de l'acquisition jusqu'à la mise en service. Un grand savoir-faire est déployé pour garantir une bonne exécution selon le CPS/CPT convenus.",
      image: "https://static.wixstatic.com/media/c4a757_48734fbfd9044199bea5cbb26afcface~mv2.jpg/v1/fill/w_568,h_758,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c4a757_48734fbfd9044199bea5cbb26afcface~mv2.jpg"
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: "maintenance electrique",
      description: "Solutions maintenance electrique évolutives pour les entreprises modernes.",
      content: "Gritel accompagne ses partenaires dans la construction de réseaux électriques à haute capacité, sécurisés et stables, tout en maîtrisant les risques liés à leur déploiement. Forts d'une expertise solide en maintenance électrique, en installation et en configuration d'équipements, nous aidons nos clients à concevoir des réseaux performants, économiques et à haut rendement énergétique.",
      image: "https://img.freepik.com/vecteurs-libre/illustration-dessin-anime-electricien-dessinee-main_23-2151046712.jpg"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Énergie Solaire",
      description: "Installations de panneaux solaires au Maroc clés en main, en autoconsommation.",
      content: "Afin de répondre au mieux aux demandes du marché énergétique en perpétuelle évolution, nous proposons des installations de panneaux solaires au Maroc clés en main, en autoconsommation. Notre équipe d'experts est à votre disposition à notre bureau de Casablanca, afin de vous proposer une solution adaptée à vos besoins. Nous intervenons dans tout le Maroc, et nous nous déplaçons sur votre site, afin de vous offrir un service 100% sur-mesure ! Votre projet est suivi de A à Z par une équipe qualifiée, alliant compétence, savoir-faire et éthique.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Construction className="w-12 h-12 text-blue-500" />,
      title: "Génie Civil",
      description: "Construction de pylônes et travaux de génie civil pour sites de télécommunications.",
      content: "Quelque soit l'environnement, Gritel présente un engagement total pour faire les travaux de génie civil tout en assurant les autorisations des autorités, et l'utilisation des équipements appropriés aux zones des travaux. La sécurité est la première priorité pour livrer un travail selon les règles de l'art en vigueur. Nous installons des pylônes et tout type de renforcement. Nous vous proposons plusieurs types de pylônes qui ont un revêtement galvanisé de qualité supérieure. Nous vous garantissons une installation rapide, simple et économique.",
      image: "https://www.uir.ac.ma/upload/cbuilder/38c0ce4bc4fd14d3b63f38daf01e2bb451cf09f0.jpeg"
    }
  ];

  const openServiceDetail = (service: any) => {
    setSelectedService({
      title: service.title,
      description: service.description,
      content: service.content,
      image: service.image
    });
  };

  const closeServiceDetail = () => {
    setSelectedService(null);
  };

  if (!isOpen) return null;

  return (
    <section id="services" className="py-20 bg-white">
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="services-modal-title">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      
      {selectedService ? (
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={closeServiceDetail}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Fermer les détails du service"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-full">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{selectedService.title}</h2>
              <p className="text-gray-700 mb-6">{selectedService.content}</p>
              <a
                href="#contact"
                onClick={() => {
                  closeServiceDetail();
                  onClose();
                }}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contactez-nous pour plus d'informations
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Fermer la fenêtre des services"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="p-8">
            <h2 id="services-modal-title" className="text-3xl font-bold text-center mb-8">Nos Secteurs d'Activité</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg transition-transform hover:scale-105 overflow-hidden shadow-md cursor-pointer"
                  onClick={() => openServiceDetail(service)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4" aria-hidden="true">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div 
                      className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
                      aria-label={`En savoir plus sur ${service.title}`}
                    >
                      En savoir plus <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Vous souhaitez en savoir plus sur nos services?
              </p>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}