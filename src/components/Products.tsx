import { useState } from 'react';
import { Wifi, Network, Radio, Router, Cpu, FileCode, Construction, Zap, ChevronRight, CheckCircle, X } from 'lucide-react';

interface ProductDetail {
  title: string;
  description: string;
  content: string;
  image: string;
}

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null);

  const products = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Déploiement de Réseaux Sans Fil",
      description: "Solutions sans fil complètes incluant 2G, 3G, CDMA, WCDMA, WiMAX, WiFi, PDH, SDH",
      features: ["Planification Réseau", "Étude de Site", "Implémentation", "Tests & Optimisation"],
      detailContent: "Quelquesoit la technologique (2G,3G,4G), Nos équipes sont à votre disposition pour liverer un produit à partir l'acquisition jusqu'à la mise en service, un grand savoir-faire est déployé pour guarantir une bonne exécution selon le CPS/CPT convenus.",
      detailImage: "https://actavo.com/images/jcogs_img/cache/NBI-Artur-730x479-min_fd0f5110d64fe6917debfd41f50bf05ec2f0a5c5.jpg"
    },
    {
      icon: <Network className="w-12 h-12 text-blue-500" />,
      title: "Opérations & Maintenance Réseau",
      description: "Services de surveillance et de maintenance réseau 24/7 pour assurer des performances optimales",
      features: ["Maintenance Préventive", "Surveillance Réseau", "Réponse d'Urgence", "Optimisation des Performances"],
      detailContent: "Nous intervenons pour assurer la maintenance corrictive et préventive des sites Radio Télécom. Vous pouvez comptez sur nos équipes qui sont expérémentées et qui sont dispatchées dans tous le territoire Maroccain. Un support Technique 24h/24 et 7j/7 est guaranti par Gritel.",
      detailImage: "https://www.praxedo.fr/wp-content/uploads/2024/09/logiciel-gestion-intervention-maintenance-electrique-praxedo.png"
    },
    {
      icon: <Radio className="w-12 h-12 text-blue-500" />,
      title: "Services d'Ingénierie",
      description: "Planification radio et transmission experte pour une couverture réseau optimale",
      features: ["Planification Radio", "Planification Transmission", "Conception Réseau", "Optimisation Couverture"],
      detailContent: "Gritel aide ses partenaires à construire des réseaux à haute capacité, sécurisés et stables tout en gérant efficacement les risques liés au déploiement du réseau. Avec une expérience solide dans l'installation et la configuration des équipements nous aidons nos Clients de télécommunications à créer des réseaux de hautes performances, à faible coût et à haut rendement pour prendre en charge le déploiement de nouveaux services.",
      detailImage: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <Router className="w-12 h-12 text-blue-500" />,
      title: "Solutions Filaires",
      description: "Livraison et installation professionnelles d'infrastructures filaires",
      features: ["Installation de Câbles", "Tests Réseau", "Assurance Qualité", "Documentation"],
      detailContent: "Gritel est votre partenaire pour l'entretien, Maintenance, fourniture et Installation des équipements électrique BT/MT. Nous Sommes agréé par l'Etat et bien classé dans les marchés public, Avec un Capital de 7.000.000 DH, Nous vous accompagnous pour réaliser votre Projet cadré par la qualité attendue.",
      detailImage: "https://www.revue-ein.com/media/redaction/article/f2a62109ee6526c8760e4e7497861aac61547aee35bf4.jpg"
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Solutions Fibre Optique",
      description: "Services de déploiement et de maintenance de fibre optique de bout en bout",
      features: ["Installation Fibre", "Épissure", "Tests", "Maintenance"],
      detailContent: "Gritel est en mesure d'effectuer toutes les opérations nécessaires à la construction de lignes électriques BT/MT et les sites Radio Mobile. Nous installons des pylônes, et tout type de renforcement. Nous vous proposons plusieurs types de pylônes qui ont un revêtement galvanisé de qualité supérieure. Nous vous garantissons une installation rapide, simple et économique.",
      detailImage: "https://www.tradingsat.com/media/pictures/realsize/news/solutions-30-dejoue-les-mauvais-augures-634075.jpg"
    },
    {
      icon: <FileCode className="w-12 h-12 text-blue-500" />,
      title: "Intégration Réseau",
      description: "Intégration transparente des réseaux et systèmes de télécommunications",
      features: ["Intégration Système", "Configuration Réseau", "Tests de Performance", "Documentation"],
      detailContent: "Quelques oit l'environnement, Gritel présente un engagement Total pour faire les travaux génie civil tous en assurant les autorisations des autorités, et utillisation des équipements appropriés aux zones des Travaux. La sécurité est la première priorité pour liverer un travail selon les règles de l'art en vigueur.",
      detailImage: "https://www.cretechnology.com/wp-content/uploads/Telecom-768x1108.jpg"
    },
    {
      icon: <Construction className="w-12 h-12 text-blue-500" />,
      title: "Environnement Site Télécom",
      description: "Solutions d'infrastructure de site complètes",
      features: ["Étude de Site", "Acquisition de Site", "Construction", "Systèmes d'Alimentation", "Systèmes d'Alarme"],
      detailContent: "Gritel fourni à ses Partenaires les équipements nécessaire pour l'environnement des sites Radio Mobile. Tous type de chemins de Cable, Les climatiseurs avec un coffret de télégestion, les supports métallique, les Brekers,...etc sont à votre disposition, une bonne installation est assurée sur tous le territoire Marocain.",
      detailImage: "https://www.maltep.com/img/cms/Secteurs%20activit%C3%A9/Telecoms.png"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Solutions d'Énergie Solaire",
      description: "Systèmes d'alimentation fiables pour l'infrastructure de télécommunications",
      features: ["Installation Panneaux Solaires", "Systèmes de Secours", "Surveillance", "Maintenance"],
      detailContent: "Afin de répondre au mieux aux demandes du marché énergétique en perpétuelle évolution. Nous proposons des installations de panneaux solaires au Maroc clés en main, en autoconsommation. Notre équipe d'expert est à votre disposition à notre bureau de Casablanca, afin de vous proposer une solution adaptée à vos besoins. Nous intervenons dans tout le Maroc, et nous nous déplaçons sur votre site, afin de vous offrir un service 100 % sur-mesure ! Votre projet est suivi de A à Z par une équipe qualifiée, alliant compétence, savoir-faire et éthique.",
      detailImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const openProductDetail = (product: any) => {
    setSelectedProduct({
      title: product.title,
      description: product.description,
      content: product.detailContent,
      image: product.detailImage
    });
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Produits & Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Solutions de télécommunications complètes conçues pour répondre aux besoins évolutifs des infrastructures de communication modernes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4" aria-hidden="true">{product.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-blue-500 mr-2" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="mt-6 flex items-center text-blue-600 hover:text-blue-700"
                  aria-label={`En savoir plus sur ${product.title}`}
                  onClick={() => openProductDetail(product)}
                >
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black opacity-50" onClick={closeProductDetail}></div>
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProductDetail}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Fermer les détails du produit"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
                <p className="text-gray-700 mb-6">{selectedProduct.content}</p>
                <a
                  href="#contact"
                  onClick={closeProductDetail}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Contactez-nous pour plus d'informations
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}