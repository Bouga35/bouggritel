import React, { useEffect, useState } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, ChevronRight, Server, Shield, Wifi, Cloud, 
  CheckCircle, Users, Building2, Globe2, Radio, Network, Cpu, Construction, 
  Zap, FileCode, Router, Target, Briefcase, Compass, Award, PenTool as Tool, 
  Sun, Wrench, Factory 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll behavior
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State for background images
  const [showServices, setShowServices] = useState(false); // State for services modal

  const backgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
  ];

  const clients = [
    { name: "INWI", logo: "https://www.inwi.ma/sites/default/files/logo_0.png" },
    { name: "Orange", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/2048px-Orange_logo.svg.png" },
    { name: "Maroc Telecom", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/7/77/Maroc_Telecom_logo_2016.svg/1280px-Maroc_Telecom_logo_2016.svg.png" },
    { name: "OCP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Logo_OCP_2011.png" },
    { name: "FinaTech", logo: "https://finatech.ma/wp-content/uploads/2020/04/logo-finatech.png" },
    { name: "IMFRO", logo: "https://imfro.ma/wp-content/uploads/2019/03/logo-imfro.png" },
    { name: "BTS", logo: "https://bts.com.tn/wp-content/uploads/2020/06/logo-bts.png" },
    { name: "Camusat", logo: "https://www.camusat.com/wp-content/uploads/2020/01/logo-camusat.png" },
    { name: "Shabakkat", logo: "https://shabakkat.com/wp-content/uploads/2021/03/logo-shabakkat.png" },
    { name: "Telcam", logo: "https://telcam.ma/wp-content/uploads/2019/05/logo-telcam.png" },
    { name: "Isolux Corsán", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Isolux_Cors%C3%A1n_logo.svg/2560px-Isolux_Cors%C3%A1n_logo.svg.png" },
    { name: "INABENSA", logo: "https://www.inabensa.com/wp-content/uploads/2018/06/logo-inabensa.png" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <Server className="w-12 h-12 text-blue-500" />,
      title: "Infrastructure Solutions",
      description: "Enterprise-grade networking and infrastructure services tailored to your needs."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your digital assets."
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Connectivity",
      description: "High-speed internet and network connectivity solutions."
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern businesses."
    }
  ];

  const products = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      title: "Wireless Network Deployment",
      description: "Comprehensive wireless solutions including 2G, 3G, CDMA, WCDMA, WiMAX, WiFi, PDH, SDH",
      features: ["Network Planning", "Site Survey", "Implementation", "Testing & Optimization"]
    },
    {
      icon: <Network className="w-12 h-12 text-blue-500" />,
      title: "Network Operations & Maintenance",
      description: "24/7 network monitoring and maintenance services to ensure optimal performance",
      features: ["Preventive Maintenance", "Network Monitoring", "Emergency Response", "Performance Optimization"]
    },
    {
      icon: <Radio className="w-12 h-12 text-blue-500" />,
      title: "Engineering Services",
      description: "Expert radio and transmission planning for optimal network coverage",
      features: ["Radio Planning", "Transmission Planning", "Network Design", "Coverage Optimization"]
    },
    {
      icon: <Router className="w-12 h-12 text-blue-500" />,
      title: "Wire Lines Solutions",
      description: "Professional delivery and installation of wire line infrastructure",
      features: ["Cable Installation", "Network Testing", "Quality Assurance", "Documentation"]
    },
    {
      icon: <Cpu className="w-12 h-12 text-blue-500" />,
      title: "Optical Fiber Solutions",
      description: "End-to-end optical fiber deployment and maintenance services",
      features: ["Fiber Installation", "Splicing", "Testing", "Maintenance"]
    },
    {
      icon: <FileCode className="w-12 h-12 text-blue-500" />,
      title: "Network Integration",
      description: "Seamless integration of telecom networks and systems",
      features: ["System Integration", "Network Configuration", "Performance Testing", "Documentation"]
    },
    {
      icon: <Construction className="w-12 h-12 text-blue-500" />,
      title: "Telecom Site Environment",
      description: "Complete site infrastructure solutions",
      features: ["Site Survey", "Site Acquisition", "Construction", "Power Systems", "Alarm Systems"]
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "Power Solutions",
      description: "Reliable power systems for telecom infrastructure",
      features: ["Power Installation", "Backup Systems", "Monitoring", "Maintenance"]
    }
  ];

  const features = [
    "24/7 Technical Support",
    "99.9% Network Uptime",
    "Certified Security Experts",
    "Custom Solutions",
    "Competitive Pricing",
    "Latest Technology"
  ];

  const stats = [
    { icon: <Users />, value: "500+", label: "Clients" },
    { icon: <Building2 />, value: "15+", label: "Years Experience" },
    { icon: <Globe2 />, value: "50+", label: "Cities Covered" },
    { icon: <CheckCircle />, value: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-500" />,
      title: "Flexibility",
      description: "Our staff are distinguished by an autonomy and high availability for our customers."
    },
    {
      icon: <Briefcase className="w-12 h-12 text-blue-500" />,
      title: "Pragmatism",
      description: "Our action goes from strategic planning to operational implementation. Our teams are systematically mobilized to support our customers on site and ensure successful project deployment."
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Commitment",
      description: "Adaptation to the constant changes request of our customers."
    },
    {
      icon: <Compass className="w-12 h-12 text-blue-500" />,
      title: "Mobility",
      description: "A strong international mobility of our teams allows us to be present in Africa, Europe and Middle East."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Hamburger Menu */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold text-blue-600">Gritel Maroc</div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Services', 'Products', 'Clients', 'About', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white`}
        >
          <div className="container mx-auto px-4 py-4">
            {['Home', 'Services', 'Products', 'Clients', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Technology background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to Gritel Maroc
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Your Partner in Digital Transformation
          </p>
          <button 
            onClick={() => setShowServices(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105"
            aria-label="Discover more about our services"
          >
            Discover More
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
              aria-label={`Show slide ${index + 1}`}
              aria-current={currentImageIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </section>

      {showServices && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="services-modal-title">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowServices(false)}></div>
          <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowServices(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close services modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <h2 id="services-modal-title" className="text-3xl font-bold text-center mb-8">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg transition-transform hover:scale-105"
                  >
                    <div className="mb-4" aria-hidden="true">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <button 
                      className="mt-4 flex items-center text-blue-600 hover:text-blue-700"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Want to learn more about how we can help your business?
                </p>
                <a
                  href="#contact"
                  onClick={() => setShowServices(false)}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="About Gritel Maroc"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg hidden md:block">
                <p className="text-2xl font-bold">15+ Years</p>
                <p>of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">About Gritel Maroc</h2>
              <p className="text-gray-600 mb-6">
                Since our establishment, Gritel Maroc has been at the forefront of technological innovation in Morocco. 
                We specialize in providing cutting-edge IT infrastructure, security solutions, and digital transformation 
                services to businesses across the country.
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

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 flex items-center text-blue-600 hover:text-blue-700">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products & Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive telecom solutions designed to meet the evolving needs of modern communication infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                  aria-label={`Learn more about ${product.title}`}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are proud to work with leading companies in the telecommunications and technology sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center h-32"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
                rows={6}
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors md:col-span-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+212 500 000 000</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>contact@gritelmaroc.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Casablanca, Morocco</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gritel Maroc</h3>
              <p className="text-gray-400">
                Leading the digital transformation in Morocco with innovative IT solutions and services.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Infrastructure Solutions</li>
                <li className="text-gray-400">Security Services</li>
                <li className="text-gray-400">Connectivity</li>
                <li className="text-gray-400">Cloud Services</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 bg-gray-800 text-white rounded-l-lg focus:outline-none flex-grow"
                />
                <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Gritel Maroc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;