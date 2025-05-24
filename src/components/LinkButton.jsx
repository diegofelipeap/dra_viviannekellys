const LinkButton = ({ 
  href, 
  label, 
  icon: Icon,
  className = ""
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center
        w-full py-3 px-4
        rounded-lg shadow-md
        font-medium text-white
        transition-all duration-300
        animate-fadeIn 
        hover:shadow-lg hover:-translate-y-0.5
        ${className}
      `}
    >
      <Icon className="mr-2 h-5 w-5" />
      <span>{label}</span>
    </a>
  );
};

export default LinkButton;