import LinkButton from './LinkButton';
import { Instagram, Facebook, MapPin } from 'lucide-react';

const SocialLinks = ({ 
  instagramUrl, 
  facebookUrl,
  addressUrl
}) => {
  return (
    <div className="flex flex-col gap-3 w-full animate-fadeIn animation-delay-400">
      <LinkButton 
        href={instagramUrl}
        label="Instagram"
        icon={Instagram}
        className="bg-[#000000] hover:bg-[#222222]"
      />
      <LinkButton 
        href={facebookUrl}
        label="Facebook"
        icon={Facebook}
        className="bg-[#000000] hover:bg-[#222222]"
      />
      <LinkButton 
        href={addressUrl}
        label="Como Chegar"
        icon={MapPin}
        className="bg-[#000000] hover:bg-[#222222]"
      />
    </div>
  );
};

export default SocialLinks;