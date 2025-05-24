import { useEffect } from 'react';
import ProfileImage from './components/ProfileImage.jsx';
import ProfileInfo from './components/ProfileInfo.jsx';
import Headline from './components/Headline.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    document.title = "Dra. Vivianne Kellys | Periodontista";
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat flex flex-col items-center justify-center py-10 px-4">
      <div className="w-full max-w-[600px] mx-auto">
        <ProfileImage
          imageUrl="/profile.jpeg"
          alt="Dra. Vivianne Kellys"
        />


        <ProfileInfo
          name="Dra. Vivianne Kellys"
          specialty="Periodontista"
        />

        <Headline
          text="Salvo sorrisos! Deixo seus dentes firmes, sua gengiva saudável!"
        />

        <div className="space-y-8 w-full">
          <WhatsAppButton
            phoneNumber="558299460477"
            message="Oi dra. Vivianne, vim através do seu Insta e gostaria de saber mais!"
          />

          <SocialLinks
            instagramUrl="https://www.instagram.com/draviviannekellys/"
            facebookUrl="https://www.facebook.com/dravivianekellys"
            addressUrl="https://g.co/kgs/QBa3FFX"
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;