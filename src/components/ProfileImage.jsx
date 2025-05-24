const ProfileImage = ({ imageUrl, alt }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="w-[150px] h-[150px] rounded-full border-2 border-[#D4AF37] overflow-hidden shadow-md">
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileImage;