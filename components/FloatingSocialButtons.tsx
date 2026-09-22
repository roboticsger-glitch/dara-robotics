import { Instagram } from "lucide-react";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor">
      <path d="M12 2.25a9.72 9.72 0 0 0-8.42 14.58L2.25 21.75l5.07-1.3A9.75 9.75 0 1 0 12 2.25Zm0 17.77a8 8 0 0 1-4.08-1.12l-.29-.17-3.01.77.8-2.92-.19-.3A8 8 0 1 1 12 20.02Zm4.39-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.68 2.56 4.07 3.59.57.25 1.02.39 1.37.5.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function FloatingSocialButtons() {
  return (
    <div className="floating-social-buttons" aria-label="Social contact links">
      <a className="floating-social-button floating-social-whatsapp" href="https://wa.me/4915563485363" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" title="WhatsApp">
        <WhatsAppIcon />
      </a>
      <a className="floating-social-button floating-social-instagram" href="https://www.instagram.com/roboticsger2026/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" title="Instagram">
        <Instagram size={22} strokeWidth={2.2} aria-hidden="true" />
      </a>
    </div>
  );
}
