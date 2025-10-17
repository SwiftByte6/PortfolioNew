 'use client'
import React, { useState } from 'react';
import Button from './Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Failed to send message');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Network error');
    }
  };

  return (
    <section 
    id='contact'
    className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16  text-white">
          <h1 className="text-5xl sm:text-6xl text-center font-sora font-semibold bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent">
       Contact
      </h1>
      <div className="max-w-6xl mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg space-y-6">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-white/70">
            Have an idea, feedback, or just want to say hi? I'm always open to a chat.
          </p>

          <div className="space-y-3">
            <div>
              <span className="text-white font-medium">Email:</span>
              <p className="text-white/70">rohitsoneji6@gmail.com</p>
            </div>
            <div>
              <span className="text-white font-medium">Location:</span>
              <p className="text-white/70">Mumbai, India</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:rohitsoneji6@gmail.com"
              className="hover:text-blue-400 transition"
              aria-label="Send email"
            >
              Email
            </a>

            <a
              href="tel:+917304631600"
              className="hover:text-blue-400 transition"
              aria-label="Call phone"
            >
              Phone: +91 7304631600
            </a>
          </div>
        </div>
        <form
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Send a Message</h2>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

         <div>
           <Button value={status === 'loading' ? 'Sending...' : 'Send Message'} disabled={status === 'loading'} />
         </div>

         {status === 'success' && (
           <p className="text-green-400">Message sent successfully. I will get back to you soon.</p>
         )}
         {status === 'error' && (
           <p className="text-red-400">Failed to send message: {errorMsg}</p>
         )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
