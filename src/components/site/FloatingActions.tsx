import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/919886122903?text=Hello%20Sri%20Balaji%20Enterprises%2C%20I%20would%20like%20a%20consultation."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
      <a
        href="tel:+919886122903"
        aria-label="Call"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-royal text-gold shadow-royal transition-transform hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
