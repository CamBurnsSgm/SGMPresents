"use client";

import { useState } from 'react';

export const metadata = {
  title: 'Contact – SGM Presents'
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, integrate with Resend or another form service.
    setSubmitted(true);
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p>Have an idea or want to work with us? Fill out the form below and we’ll be in touch.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label htmlFor="service" className="block font-medium mb-1">Service</label>
            <select
              id="service"
              name="service"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select a service</option>
              <option value="vox-pops">Vox Pops</option>
              <option value="challenges">Challenges</option>
              <option value="presenter">Presenter‑Led Pieces</option>
              <option value="live">Live Event Coverage</option>
              <option value="ugc">UGC Briefs</option>
              <option value="editing">Editing Only</option>
              <option value="live-streams">Livestreams</option>
              <option value="casting">Talent Casting</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="p-4 bg-green-100 text-green-800 rounded-md">Thank you! We’ll get back to you shortly.</div>
      )}
    </div>
  );
}