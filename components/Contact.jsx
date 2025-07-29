'use client'
import React from 'react';
import Button from './Button';

const Contact = () => {
  return (
    <section 
    id='contact'
    className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16  text-white">
          <h1 className="text-5xl sm:text-6xl text-center font-sora font-semibold bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent">
       Contact
      </h1>
      <div className="max-w-6xl mt-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE - Info & Social */}
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg space-y-6">
          <h2 className="text-3xl font-bold">Let's Connect</h2>
          <p className="text-white/70">
            Have an idea, feedback, or just want to say hi? I'm always open to a chat.
          </p>

          <div className="space-y-3">
            <div>
              <span className="text-white font-medium">Email:</span>
              <p className="text-white/70">rohit@example.com</p>
            </div>
            <div>
              <span className="text-white font-medium">Location:</span>
              <p className="text-white/70">Mumbai, India</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <form
          className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message sent! (You can connect this to Formspree or EmailJS)');
          }}
        >
          <h2 className="text-3xl font-bold">Send a Message</h2>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input
              type="text"
              id="name"
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
              className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

         <Button value={'Send Message'}/>
        </form>
      </div>
    </section>
  );
};

export default Contact;
