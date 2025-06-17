import React from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage(''); 


    console.log('Form Data Submitted:', formData);

    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black font-inter">
      <div className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-2xl border border-cyan-500 max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-8 tracking-wide font-space-mono">Contact Our Crew</h2>

        {isSubmitted ? (
          <div className="text-center text-green-400 text-lg py-6 animate-pulse">
            <p className="mb-2">🚀 Message Sent Successfully! 🚀</p>
            <p>We'll get back to you as soon as our comms are clear.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300 transform hover:scale-105"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && (
              <div className="bg-red-900 text-red-300 p-3 rounded-lg text-sm text-center border border-red-700">
                {errorMessage}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all duration-200"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-y transition-all duration-200"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500 focus:ring-opacity-50"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactPage;

