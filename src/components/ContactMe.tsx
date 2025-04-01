"use client";
import { useState } from "react";
const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY as string;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.init(EMAIL_API_KEY);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params).then(
      () => {
        setMessageStatus('success');
      },
      () => {
        setMessageStatus('error');
      }
    );

    // Reset form data
    setFormData({ name: "", email: "", message: "" });

    // Hide messageStatus after 5 seconds
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black-900 border-t border-gray-700 pt-10">
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-4"
          >
            Send Message
          </button>
        </form>

        {/* Message Status */}
        {messageStatus && (
          <div
            className={`mt-4 p-4 text-center rounded-lg ${
              messageStatus === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {messageStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
          </div>
        )}
      </div>
    </section>
  );
}
