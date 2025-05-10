import React from 'react';
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react';
import { Link } from "react-router-dom"
function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-8">Get in Touch</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-yellow transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-yellow transition-colors text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-orange-yellow transition-colors text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-yellow hover:bg-orange-yellow/90 text-black font-medium px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-6">
                <p className="text-white/80">
                  Feel free to reach out to me through any of these channels. I'll get back to you as soon as possible.
                </p>

                <div className="space-y-4">
                  <a href="mailto:john@example.com" className="flex items-center gap-3 text-white/80 hover:text-orange-yellow transition-colors">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                    {/* <a target="_blank" rel="stylesheet" href="marouaneaddou@hotmail.com" > */}
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-white/60">marouaneaddou@hotmail.com</div>
                    {/* </a> */}
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-orange-yellow transition-colors">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <Link target="_blank" rel="stylesheet" to="https://github.com/marouaneaddou" >
                        <div className="font-medium">Github</div>
                        <div className="text-sm text-white/60">marouaneaddou</div>
                      </Link>
                    </div>
                  </a>

                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-orange-yellow transition-colors">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <Link target="_blank" rel="stylesheet" to="https://www.linkedin.com/in/marouaneaddou/" >
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-white/60">marouaneaddou</div>
                      </Link>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-white/80 hover:text-orange-yellow transition-colors">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      {/* <Link target="_blank" rel="stylesheet" to="https://www.linkedin.com/in/marouane-addou-303997202/" > */}
                        <div className="font-medium">Phone</div>
                        <div className="text-sm text-white/60">0696782838</div>
                      {/* </Link> */}
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-white/10">
                  {/* <h3 className="font-medium mb-3">Office Hours</h3>
                  <div className="text-sm text-white/60">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM PST</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;