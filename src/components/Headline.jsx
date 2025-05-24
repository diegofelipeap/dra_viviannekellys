const Headline = ({ text }) => {
  return (
    <div className="text-center mb-8 animate-fadeIn animation-delay-200">
      <p className="text-lg md:text-xl text-gray-800 font-medium leading-relaxed px-4">
        {text}
      </p>
    </div>
  );
};

export default Headline;