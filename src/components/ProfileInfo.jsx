const ProfileInfo = ({ name, specialty }) => {
  return (
    <div className="text-center mb-6 animate-fadeIn">
      <h1 className="text-2xl font-bold text-black mb-1">{name}</h1>
      <p className="text-lg text-gray-700 font-medium">{specialty}</p>
    </div>
  );
};

export default ProfileInfo;