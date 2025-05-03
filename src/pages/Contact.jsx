import React from 'react';

const Contact = () => {

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 text-center">Contact Us</h2>
        <form onSubmit={onSubmitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-200 px-4 py-2 rounded focus:outline-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dull transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;