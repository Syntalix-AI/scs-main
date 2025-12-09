"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant from Syntalix Consultancy Services. We specialize in AI/ML solutions, web development, and mobile apps with AI integration.\n\nOur expertise includes:\n• ChatGPT applications & custom integrations\n• Computer Vision & Sentiment Analysis\n• E-commerce & Corporate websites\n• iOS/Android mobile apps\n\nWith 200+ team members and 150+ completed projects, we serve clients globally. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          conversationHistory: messages.slice(-6).map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.text,
          })),
        }),
      });

      const data = await response.json();

      if (data.success) {
        const botMessage = {
          id: messages.length + 2,
          text: data.response,
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);

      // Provide helpful fallback responses based on common queries
      let fallbackResponse =
        "Sorry, I'm having trouble connecting right now. Here are some ways to reach us:\n\n";
      fallbackResponse += "📧 Email: syntalix.ai@gmail.com\n";
      fallbackResponse += "📱 WhatsApp: +91 9259750107\n";
      fallbackResponse += "🌐 Website: syntalix.com\n\n";

      if (
        inputMessage.toLowerCase().includes("service") ||
        inputMessage.toLowerCase().includes("what")
      ) {
        fallbackResponse +=
          "Our main services include:\n• AI/ML Solutions (ChatGPT, Computer Vision, Predictive Analytics)\n• Web Development (E-commerce, Corporate sites, PWAs)\n• Mobile App Development (iOS, Android, Cross-platform)\n\nSpecial projects: ChatGPT drag & drop, Spider-modeled Sentiment Analysis, Custom AI integrations";
      } else if (
        inputMessage.toLowerCase().includes("price") ||
        inputMessage.toLowerCase().includes("cost")
      ) {
        fallbackResponse +=
          "Our projects range from ₹9,000 to ₹60,000 depending on complexity.\n• Simple AI integrations: ₹9,000-₹18,000\n• Web applications: ₹20,000-₹40,000\n• Complex AI systems: ₹35,000-₹60,000";
      } else if (
        inputMessage.toLowerCase().includes("time") ||
        inputMessage.toLowerCase().includes("long")
      ) {
        fallbackResponse +=
          "Most projects are completed within 4 days to 3 weeks.\n• Simple integrations: 4-7 days\n• Web/Mobile apps: 1-2 weeks\n• Complex AI systems: 2-3 weeks";
      } else if (
        inputMessage.toLowerCase().includes("ai") ||
        inputMessage.toLowerCase().includes("chatgpt")
      ) {
        fallbackResponse +=
          "We specialize in AI solutions including:\n• ChatGPT integrations & custom applications\n• Computer Vision & Image Recognition\n• Sentiment Analysis & NLP\n• Predictive Analytics\n• AI Chatbots\n\nPast projects include drag & drop ChatGPT interfaces and spider-modeled sentiment analysis.";
      } else if (
        inputMessage.toLowerCase().includes("team") ||
        inputMessage.toLowerCase().includes("experience")
      ) {
        fallbackResponse +=
          "About Syntalix:\n• 200+ Team Members\n• 150+ Completed Projects\n• 25+ Satisfied Clients\n• Global reach (US, UK, Australia, Dubai, Singapore, Germany, Mexico, India)\n• 99.9% client satisfaction rate";
      } else {
        fallbackResponse +=
          "We're a software development company specializing in AI-integrated web and mobile applications. Please contact us directly for immediate assistance!";
      }

      const errorMessage = {
        id: messages.length + 2,
        text: fallbackResponse,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "What AI/ML services do you offer?",
    "Tell me about your ChatGPT drag & drop project",
    "How much do AI projects typically cost?",
    "Can you help with computer vision projects?",
    "What's your experience with sentiment analysis?",
    "Do you build custom mobile apps with AI?",
    "How long does AI development take?",
    "Can you integrate ChatGPT into my website?",
  ];

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 w-min p-3 rounded-full fixed bottom-28 right-4 cursor-pointer md:right-8 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaRobot color="white" className="w-6 h-6 md:w-8 md:h-8" />
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-20 right-4 md:bottom-24 md:right-8 w-80 md:w-96 h-[500px] bg-background/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <FaRobot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Syntalix Assistant</h3>
                  <p className="text-xs opacity-90">Online • AI Powered</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <IoClose className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border text-foreground"
                      }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <p
                      className={`text-xs mt-1 opacity-70 ${message.sender === "user"
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                        }`}
                    >
                      {message.timestamp}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-background border border-border p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Quick Questions */}
              {messages.length === 1 && !isLoading && (
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground text-center">
                    Quick questions:
                  </p>
                  {quickQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => {
                        setInputMessage(question);
                        setTimeout(handleSendMessage, 100);
                      }}
                      className="w-full text-left p-2 text-xs bg-background hover:bg-muted border border-border rounded-lg transition-colors"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-background">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2 bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <FaPaperPlane className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Powered by AI • Contact: syntalix.ai@gmail.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
