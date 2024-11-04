type ProfilePros = {
  name: string;
};

const Profile = ({ name }: ProfilePros) => {
  return <div>Profile component: {name}</div>;
};

export default Profile;
