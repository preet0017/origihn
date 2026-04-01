import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="pt-24 pb-24 bg-[#F7F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Header */}
        <div className="text-center mb-16 pt-8 md:pt-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10" />
          <span className="inline-block py-1.5 px-4 rounded-full bg-origihn-green text-origihn-textPrimary text-xs font-bold tracking-widest uppercase mb-8 border border-origihn-green/30 shadow-sm">
            Get In Touch
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-origihn-textPrimary mb-6 font-bold tracking-tight">
            We'd love to <span className="italic text-origihn-red">hear from you</span>
          </h1>
          <p className="text-lg text-origihn-textSecondary max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our macro kits, delivery, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 mt-20">

          {/* Contact Details */}
          <div className="lg:w-1/3">
            <h2 className="font-serif text-3xl text-origihn-textPrimary mb-8">Contact Information</h2>
            <div className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-origihn-red shadow-sm border border-origihn-green/20 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-origihn-textPrimary mb-1">Our Kitchen</h3>
                  <p className="text-origihn-textSecondary leading-relaxed">123 Fitness Boulevard,<br />Health City, HC 40001<br />India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-origihn-red shadow-sm border border-origihn-green/20 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-origihn-textPrimary mb-1">Call Us</h3>
                  <p className="text-origihn-textSecondary leading-relaxed">+91 98765 43210<br /><span className="text-sm text-origihn-textSecondary">Mon-Sat, 8am to 8pm</span></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-origihn-red shadow-sm border border-origihn-green/20 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-origihn-textPrimary mb-1">Email Us</h3>
                  <p className="text-origihn-textSecondary leading-relaxed">hello@dailyprotein.in<br /><span className="text-sm text-origihn-textSecondary">We'll reply within 24 hours</span></p>
                </div>
              </div>

            </div>

            <div className="mt-12 p-8 bg-origihn-textPrimary text-white rounded-[2rem] shadow-xl relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-origihn-yellow/20 rounded-full blur-[40px]" />
               <h3 className="font-serif text-2xl mb-4 italic">Partner With Us</h3>
               <p className="text-origihn-cream/70 text-sm mb-6 leading-relaxed">Are you a gym owner or nutritionist looking to provide high-quality protein meals to your clients?</p>
               <button className="bg-origihn-red text-white px-6 py-3 rounded-full hover:bg-origihn-red/90 transition-all font-bold text-sm shadow-md">
                 Wholesale Inquiries
               </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-origihn-textPrimary/5 border border-origihn-green/20 relative">
              <h2 className="font-serif text-3xl text-origihn-textPrimary mb-8">Send us a message</h2>
              <form className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-origihn-textPrimary mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-[#F7F5F0] border border-origihn-green/20 rounded-xl px-5 py-4 focus:outline-none focus:border-origihn-red focus:ring-1 focus:ring-origihn-red/30 transition-all text-origihn-textPrimary" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-origihn-textPrimary mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-[#F7F5F0] border border-origihn-green/20 rounded-xl px-5 py-4 focus:outline-none focus:border-origihn-red focus:ring-1 focus:ring-origihn-red/30 transition-all text-origihn-textPrimary" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-origihn-textPrimary mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-[#F7F5F0] border border-origihn-green/20 rounded-xl px-5 py-4 focus:outline-none focus:border-origihn-red focus:ring-1 focus:ring-origihn-red/30 transition-all text-origihn-textPrimary" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-origihn-textPrimary mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full bg-[#F7F5F0] border border-origihn-green/20 rounded-xl px-5 py-4 focus:outline-none focus:border-origihn-red focus:ring-1 focus:ring-origihn-red/30 transition-all text-origihn-textPrimary" placeholder="How can we help?" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-origihn-textPrimary mb-2">Message</label>
                  <textarea id="message" rows="5" className="w-full bg-[#F7F5F0] border border-origihn-green/20 rounded-xl px-5 py-4 focus:outline-none focus:border-origihn-red focus:ring-1 focus:ring-origihn-red/30 transition-all text-origihn-textPrimary resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <button type="submit" className="w-full bg-origihn-red text-white px-8 py-4 rounded-xl hover:bg-origihn-red/90 hover:-translate-y-1 transition-all font-bold tracking-wide shadow-xl shadow-origihn-red/20 text-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}