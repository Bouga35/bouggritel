import  { useState, useEffect } from 'react';

interface HeroProps {
  onShowServices: () => void;
}

export function Hero({ onShowServices }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "http://plus.unsplash.com/premium_photo-1679917152484-c7b68dd0962a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVsZWNvbW11bmljYXRpb258ZW58MHx8MHx8fDA%3D",
    "https://t3.ftcdn.net/jpg/03/91/07/70/360_F_391077023_syRHazVB0iHPiMJkTSTxrBv6Be34tnOb.jpg",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentImageIndex === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Fond technologique ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Bienvenue chez Gritel 
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-up">
          Votre Partenaire en Transformation Digitale
        </p>
        <button 
          onClick={onShowServices}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
          aria-label="Découvrez nos services"
        >
          Découvrir Plus
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentImageIndex === index ? 'bg-blue-600 w-6' : 'bg-white'
            }`}
            aria-label={`Afficher diapositive ${index + 1}`}
            aria-current={currentImageIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>
  );
}