import "../styles/Team.css";
import ganguly from "../assets/team-ganguly.jpg"; 
import nethmi from "../assets/team-Nethmi.jpeg";
import vishmi from "../assets/team-vishmi.jpg";
import pawani from "../assets/team-pawani.jpeg";
import pamudu from "../assets/team-pamudu.jpeg";
import sasindi from "../assets/team-sasindi.jpeg";

export default function Team() {
  return (
    <section className="team-section">
      <h2>Meet Our Team</h2>

      <div className="team-scroll">
        {/* Member 1 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={ganguly} alt="Ganguly Hettiarachci" />
              <h3>Ganguly Hettiarachci</h3>
            </div>
            <div className="card-back">
              <h3>Team Lead & QA Manager</h3>
              <p>Leads the team, manages project timelines, 
                and ensures system quality through testing and reviews.</p>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={vishmi} alt="Vishmi Fernando" />
              <h3>Vishmi Fernando</h3>
            </div>
            <div className="card-back">
              <h3>UI/UX Designer & Database Engineer</h3>
              <p>Designs intuitive user experiences while handling 
                database structure and backend data management.</p>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={nethmi} alt="Nethmi Athukorala" />
              <h3>Nethmi Athukorala</h3>
            </div>
            <div className="card-back">
              <h3>Full-stack & Cloud Systems Developer</h3>
              <p>Develops frontend and backend features, algorithms, 
                and manages cloud-based file strorage systems. 
              </p>
            </div>
          </div>
        </div>

        {/* Member 4 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={pawani} alt="Pawani Hettiarachci" />
              <h3>Pawani Hettiarachci</h3>
            </div>
            <div className="card-back">
              <h3>Backend & API Integration Developer</h3>
              <p>Builds backend logic and integrates APIs to 
                support seamless support functionality</p>
            </div>
          </div>
        </div>

        {/* Member 5 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={sasindi} alt="Sasindi Korala" />
              <h3>Sasindi Korala</h3>
            </div>
            <div className="card-back">
              <h3>UI/UX Designer & Frontend Developer</h3>
              <p>Creates user-centered designs and implements responsive,
                interactive frontend interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Member 6 */}
        <div className="team-card">
          <div className="card-inner">
            <div className="card-front">
              <img src={pamudu} alt="Pamudu Wijethunga" />
              <h3>Pamudu Wijethunga</h3>
            </div>
            <div className="card-back">
              <h3>Backend & System Reliability Developer</h3>
              <p>Focuses on backend development, system stability, 
                and handling edge cases efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
