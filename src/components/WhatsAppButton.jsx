import { MessageCircle } from 'lucide-react';
import LinkButton from './LinkButton';

const WhatsAppButton = ({ phoneNumber, message }) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  return (
    <LinkButton 
      href={whatsappUrl}
      label="Agendar Consulta"
      icon={MessageCircle}
      className="bg-[#25D366] hover:bg-[#20BD5A] animation-delay-300"
    />
  );
};

export default WhatsAppButton;