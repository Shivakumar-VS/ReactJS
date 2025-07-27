function ProfilePic(){
    const imageUrl = "./src/assets/ss.png";

    const handleClick = () => console.log("Profile picture clicked!");  
    return (<img src={imageUrl} alt="Profile" className="profile-pic" onClick={handleClick}/>);
}
export default ProfilePic;