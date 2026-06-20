"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineUser, HiOutlineMail, HiOutlineChatAlt2, HiOutlineCurrencyDollar } from "react-icons/hi";
import { ImSpinner2 } from "react-icons/im";

const LeadForm = ({ 
  title = "Let's Talk Business", 
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  buttonText = "Send Message",
  className = "w-full max-w-md mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-slate-800/50 shadow-2xl rounded-2xl p-8"
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!formData.message.trim()) {
      toast.error('Please enter your message');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: "", email: "", budget: "", message: "" });
      } else {
        const data = await response.json();
        toast.error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      {title && <h3 className="text-2xl font-bold mb-2 text-foreground">{title}</h3>}
      {subtitle && <p className="text-sm text-muted-foreground mb-6">{subtitle}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <label htmlFor="name" className="sr-only">Name</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineUser className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder-gray-400"
          />
        </div>

        <div className="relative">
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineMail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder-gray-400"
          />
        </div>

        <div className="relative">
          <label htmlFor="budget" className="sr-only">Budget</label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineCurrencyDollar className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            disabled={isLoading}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground appearance-none"
          >
            <option value="" disabled hidden>Select Budget Range (Optional)</option>
            <option value="<5000">Less than $5,000</option>
            <option value="5000-10000">$5,000 - $10,000</option>
            <option value="10000-25000">$10,000 - $25,000</option>
            <option value="25000+">$25,000+</option>
          </select>
        </div>

        <div className="relative">
          <label htmlFor="message" className="sr-only">Message</label>
          <div className="absolute top-3 left-3 flex items-start pointer-events-none">
            <HiOutlineChatAlt2 className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            disabled={isLoading}
            rows={3}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder-gray-400 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="relative flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-white overflow-hidden group shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-cyan-500 group-hover:scale-105 transition-transform duration-300" />
          {isLoading ? (
            <span className="relative flex items-center gap-2">
              <ImSpinner2 className="animate-spin w-5 h-5" /> Sending...
            </span>
          ) : (
            <span className="relative flex items-center gap-2">{buttonText}</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
