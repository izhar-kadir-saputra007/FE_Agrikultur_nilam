import ProfileTeam from "../assets/images/Profile team.png";

const profileData = [
  {
    name: "Amiruddin Dako",
    instagram: "https://www.instagram.com/amirudindako/",
    image: ProfileTeam,
  },
  {
    name: "Sapril",
    instagram: "https://www.instagram.com/s.feb_02/",
    image: ProfileTeam,
  },
  {
    name: "Profile 3",
    instagram: "https://www.instagram.com/rifld15/",
    image: ProfileTeam,
  },
];

const ProfileCard = ({ name, instagram, image }) => {
  return (
    <a href={instagram}>
      <div className="relative w-full sm:w-[350px] mx-auto rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        <img src={image} alt={name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 group-hover:bg-gradient-to-t from-black via-transparent to-transparent opacity-50 transition-all duration-500"></div>
      </div>
    </a>
  );
};

const About = () => {
  return (
    <div className="about container mx-auto flex items-center justify-center flex-col gap-16 pb-24 px-4 md:px-8">
      {/* Header Section */}
      <div className="box text-center">
        <h1 className="font-delius text-4xl md:text-5xl font-semibold text-black">
          <span className="text-color3 hover:text-color5 transition-colors duration-300">About</span> Us
        </h1>
      </div>

      {/* Profile Section */}
      <div className="box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg border-color2 py-8 px-4 md:px-8 shadow-lg shadow-color4">
        {profileData.map((profile, index) => (
          <ProfileCard key={index} name={profile.name} instagram={profile.instagram} image={profile.image} />
        ))}
      </div>
    </div>
  );
};

export default About;
