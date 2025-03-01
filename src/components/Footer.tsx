

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gritel Maroc</h3>
            <p className="text-gray-400">
              Leader de la transformation digitale au Maroc avec des solutions et services IT innovants.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">À Propos</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Solutions d'Infrastructure</li>
              <li className="text-gray-400">Services de Sécurité</li>
              <li className="text-gray-400">Connectivité</li>
              <li className="text-gray-400">Services Cloud</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Abonnez-vous à notre newsletter pour les mises à jour</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 bg-gray-800 text-white rounded-l-lg focus:outline-none flex-grow"
              />
              <button className="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700">
                S'abonner
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gritel Maroc. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}