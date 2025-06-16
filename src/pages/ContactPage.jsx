import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <section className="contact-content p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
        <p className="text-lg text-text-color mb-4 leading-relaxed">
          Have questions about the solar system? Want to suggest new features for Solar Explorer? We'd love to hear from you!
        </p>
        <p className="text-lg text-text-color mb-4 leading-relaxed">
          You can reach us via email at: <a href="mailto:info@solarexplorer.com" className="text-primary-color hover:underline">info@solarexplorer.com</a>
        </p>
        <p className="text-lg text-text-color leading-relaxed">
          Please allow a million business days for a response. We appreciate your feedback and interest in our celestial journey!
        </p>
      </section>
    </div>
  );
};

export default ContactPage;
