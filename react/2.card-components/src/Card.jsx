import profilePic from './assets/ss.png';
function Card(){
    return(
        <div className="card">
            <img src={profilePic} className="card-img" alt="Porfile-picture"></img>
            <h2 className="card-title">Shivakumar V S</h2>
            <p className="card-text">Full Stack Developer</p>
        </div>
    )
}
export default Card;