"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

type Props = {
  phone?: string; // international format, no +
  message?: string;
};

const WhatsAppButton = ({
  phone = "917574002596",
  message = "Hi Shine Native, I'd love to learn more about your properties.",
}: Props) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-card hover:shadow-glow transition-shadow"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-5 h-5 relative" />
      <span className="text-sm font-medium relative ">WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
