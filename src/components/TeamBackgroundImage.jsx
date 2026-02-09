import './TeamBackgroundImage.css';
import teamBg1 from '../assets/team-bg-1.png';
import teamBg2 from '../assets/team-bg-2.png';

function TeamBackgroundImage() {
  return (
    <div className="team-bg-wrapper">
      <div className="team-bg-layer">
        <div className="team-bg-clip">
          <div className="team-bg-group">
            <div className="team-bg-masked" style={{ maskImage: `url('${teamBg2}')` }}>
              <div className="team-bg-image-container">
                <img alt="Team collaboration" className="team-bg-image" src={teamBg1} />
              </div>
            </div>
            <div
              className="team-bg-gradient"
              style={{
                backgroundImage: "linear-gradient(112.55deg, rgba(31, 54, 56, 1) 9.37%, rgba(0, 175, 103, 0) 40.17%)",
                maskImage: `url('${teamBg2}')`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamBackgroundImage;
