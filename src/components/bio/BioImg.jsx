import avatar from "../../assets/avatar.jpg";
export default function BioImg() {
  return (
    <div className="about-side">
      <img className="bio__img" src={avatar} alt="Gurin Mihail" />
    </div>
  );
}
