const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-10 text-center text-sm text-gray-500 animate-fadeIn animation-delay-500">
      <p>© {currentYear} Dra. Vivianne Kellys | Periodontista</p>
      <p className="mt-1">Todos os direitos reservados</p>
    </footer>
  );
};

export default Footer;