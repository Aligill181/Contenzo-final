import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Globe } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { handleFirestoreError, OperationType } from "../lib/AuthContext";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. API Call for email notification
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // 2. Save to Firestore for Admin Panel
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      setSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "inquiries");
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary min-h-screen pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 mb-4">Get in Touch</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have questions about our marketplace or need dedicated SEO support? 
            Our team is here to help you scale your rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface border border-border rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Contact Details */}
          <div className="p-12 lg:p-16 bg-primary-light flex flex-col justify-between relative group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
             
             <div>
                <div className="flex items-center gap-2 mb-12">
                   <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                      <Globe className="text-white w-6 h-6" />
                   </div>
                   <span className="text-2xl font-display font-bold text-white uppercase">CONTENZO</span>
                </div>

                <div className="space-y-10">
                   <div className="flex items-start gap-6">
                      <div className="mt-1 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                         <MapPin className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-text-primary mb-1">Our Office</h3>
                         <p className="text-text-secondary">9 Kings Hall Apartments, 23-25 King Street,<br/>Oldham, OL8 1DP, England</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6">
                      <div className="mt-1 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                         <Mail className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-text-primary mb-1">Email Us</h3>
                         <p className="text-text-secondary">Team@contenzo.co.uk</p>
                         <p className="text-xs text-text-muted mt-1 italic">Average response: 4 hours</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6">
                      <div className="mt-1 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                         <Phone className="text-accent w-6 h-6" />
                      </div>
                      <div>
                         <h3 className="font-bold text-text-primary mb-1">Call Support</h3>
                         <p className="text-text-secondary">+44 7716 719861</p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="mt-12 pt-12 border-t border-border/50 text-text-muted text-sm leading-relaxed">
                Registered in England & Wales as Contenzo SEO Platform LTD. 
                Providing premium link building services and data since 2021.
             </div>
          </div>

          {/* Contact Form */}
          <div className="p-12 lg:p-16">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
                   <CheckCircle2 className="w-12 h-12 text-success" />
                </div>
                <h2 className="text-3xl font-display font-bold text-text-primary">Thank You!</h2>
                <p className="text-text-secondary max-w-sm">
                  We've received your message and will get back to you within 24 hours. 
                  Have a great day!
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-accent font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Smith"
                      className="w-full bg-primary-light border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="w-full bg-primary-light border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Subject</label>
                  <select 
                    value={formData.subject}
                    onChange={e => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-primary-light border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all appearance-none cursor-pointer"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Technical Support</option>
                    <option>Billing</option>
                    <option>Report a Listing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-primary-light border border-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent-glow text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-5 h-5" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
