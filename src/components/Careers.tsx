import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { v2 as cloudinary } from 'cloudinary';




export function Careers() {
  const [position, setPosition] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: position || (formData.get('subject') as string),
      message: formData.get('message') as string,
      cv: formData.get('cv') as File | null,
    };

    try {
      let cvUrl = '../../page/cv';

      // Upload CV to Cloudinary if it exists
      if (data.cv) {
        const cloudinaryData = new FormData();
        cloudinaryData.append('file', data.cv);
        cloudinaryData.append('upload_preset', 'gritel'); // Replace with your Cloudinary upload preset

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dkgvjwxgk/upload`, // Replace with your Cloudinary cloud name
          {
            method: 'POST',
            body: cloudinaryData,
          }
        );

        const result = await response.json();
        cvUrl = result.secure_url; // Get the uploaded file URL
      }

      // Send email using EmailJS
      await emailjs.send(
        'service_1g2cb9r', // Replace with your EmailJS Service ID
        'template_3ur56oo', // Replace with your EmailJS Template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          position: data.position,
          message: data.message,
          cv: cvUrl,
        },
        'gSGJ6apIeD-Q9LyU9' // Replace with your EmailJS User ID
      );

      setSubmitMessage('Candidature soumise avec succès!');
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Une erreur s\'est produite. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="careers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          {position ? `Postuler pour ${position}` : 'Carrières'}
        </h2>
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="tel"
              name="phone"
              placeholder="Votre Téléphone"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Télécharger CV (PDF, DOC, DOCX)
              </label>
              <input
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder='Télécharger CV (PDF, DOC, DOCX)'
              />
            </div>
            <textarea
              name="message"
              placeholder="Pourquoi pensez-vous être un bon candidat pour ce poste?"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
              rows={6}
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors md:col-span-2"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Soumettre la Candidature'}
            </button>
            {submitMessage && (
              <p className="text-center md:col-span-2 mt-4 text-green-600">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}