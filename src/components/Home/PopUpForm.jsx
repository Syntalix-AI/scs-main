'use client'
import { useState, useEffect } from 'react';
import { ImCross } from "react-icons/im";
import { toast } from 'react-hot-toast';
import LeadForm from '../shared/LeadForm';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-[100]">
      <div className="relative w-[90%] max-w-md mx-auto">
        <button
          className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 text-gray-500 hover:text-gray-900 dark:hover:text-white rounded-full p-2 shadow-lg z-10 transition-colors"
          onClick={() => setIsVisible(false)}
        >
          <ImCross className="w-4 h-4" />
        </button>
        <LeadForm 
          title="Get in Touch With Us" 
          subtitle="We'd love to learn more about how we can help you."
        />
      </div>
    </div>
  );
};

export default PopupForm;