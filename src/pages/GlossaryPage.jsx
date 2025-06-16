import React, { useState } from 'react';
import { glossaryTerms} from '../data/astronomyData';

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaqId, setOpenFaqId] = useState(null);

  const filteredTerms = glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="glossary-page">
      <h1 className="text-4xl font-bold mb-8 text-center">Astronomical Glossary</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-primary-color">Glossary of Terms</h2>
        <div className="search-bar mb-6">
          <input
            type="text"
            placeholder="Search glossary terms..."
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-text-color focus:outline-none focus:border-primary-color"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <br />
        <div className="glossary-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTerms.length > 0 ? (
            filteredTerms.map(item => (
              <div key={item.id} className="glossary-item bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
                <h3 className="text-xl font-semibold text-primary-color mb-2">{item.term}</h3>
                <p className="text-text-color text-base">{item.definition}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-text-color md:col-span-2">No terms found matching your search.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default GlossaryPage;