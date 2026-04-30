"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="relative py-15 px-6 bg-background transition-colors duration-500 overflow-hidden"
    >
      {/* Background Decorative Blobs - আপনার প্রজেক্ট সেকশনের মতো ডাইনামিক গ্লো */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.05] dark:bg-purple-600/[0.1] blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.05] dark:bg-blue-600/[0.1] blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading - আপনার প্রজেক্ট কার্ডের টাইটেল স্টাইলে */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 bg-background ">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full shadow-lg dark:shadow-purple-500/50"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Cards - প্রজেক্ট কার্ডের বর্ডার এবং ব্যাকগ্রাউন্ড লজিক */}
          <div className="space-y-8">
            {[
              { icon: Mail, label: "Email Me", val: "shifatulla15@gmail.com", color: "from-blue-600 to-cyan-500" },
              { icon: Phone, label: "Call Me", val: "+880 1315848755", color: "from-purple-600 to-pink-500" },
              { icon: MapPin, label: "Location", val: "Dhaka, Bangladesh", color: "from-orange-600 to-yellow-500" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-purple-500/30 backdrop-blur-md hover:shadow-xl dark:hover:shadow-purple-500/10 transition-all group"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                  <item.icon size={26} />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-gray-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xl font-bold text-slate-800 dark:text-gray-200">{item.val}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Contact Form - প্রজেক্ট কার্ডের ফিনিশিং এবং গ্লো ইমপ্যাক্ট */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem]  border border-slate-200 dark:border-purple-500/30 backdrop-blur-2xl shadow-sm  transition-all"
          >
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1 uppercase tracking-tighter">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#03001C]/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1 uppercase tracking-tighter">Email</label>
                  <input 
                    type="email" 
                    placeholder="you email" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50  border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-gray-300 ml-1 uppercase tracking-tighter">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write you message..." 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-[#03001C]/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-purple-500/30 transition-all uppercase tracking-widest"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;