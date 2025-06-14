"use client";
import { useState } from "react";
const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY as string;
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [messageStatus, setMessageStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessageStatus("emailerror");
      setTimeout(() => {
        setMessageStatus("");
      }, 5000);
      return;
    }

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    setLoading(true);

    // Debugging
    // setTimeout(() => {
    //   setLoading(false);
    //   setMessageStatus('error');
    // }, 1000);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params, EMAIL_API_KEY).then(
      () => {
        setLoading(false);
        setMessageStatus('success');
        setFormData({ name: "", email: "", message: "" });
      },
      () => {
        setLoading(false);
        setMessageStatus('error');
      }
    );

    // Hide messageStatus after 5 seconds
    setTimeout(() => {
      setMessageStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black-900 border-t border-gray-700 pt-10 pb-10">
      <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
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
            disabled={loading}
            required
            style={{
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            disabled={loading}
            required
            style={{
                padding: '12px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-4 relative min-h-[3rem]"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin h-5 w-5 border-4 border-t-transparent border-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            ) : (
              "Send Message"
            )}
          </button>

        </form>

        {/* Message Status */}
        {messageStatus && (
          <div
            className={`mt-4 p-4 text-center rounded-lg ${
              messageStatus === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {messageStatus === 'success' ? 'Message sent successfully!' : (messageStatus === "emailerror" ? 'Enter a valid email address.' : 'Failed to send message. Please try again.')}
          </div>
        )}
      </div>
    </section>
  );
}
