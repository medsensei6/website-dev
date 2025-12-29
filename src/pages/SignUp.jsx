import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="signup-page">
      {/* Page Header */}
      <div className="signup-header">
        <h1>Get Started with MedSensei</h1>
        <p>
          Choose the option that best fits where you are in your medical journey.
        </p>
        <p>
          <span className="free-text">Everything is FREE</span>
        </p>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card signup-card">
          <h2>📋 Application Guidance</h2>
          <p>Personalized support through every step of the application cycle</p>
          <ul className="checklist">
            <li>✓ Matched with a dedicated Sensei</li>
            <li>✓ Ongoing 1:1 mentorship</li>
            <li>✓ Build a strategic, mission-fit school list</li>
            <li>✓ Personal statement brainstorming & revision</li>
            <li>✓ Activities section strategy and editing</li>
            <li>✓ Secondary application guidance</li>
            <li>✓ Interview preparation and mock interviews</li>
          </ul>
          <Link
            to="https://forms.gle/4Kh8jRms8Prmedf26"
            target="_blank"
            rel="noopener noreferrer"
            className="signup-button"
          >
            Sign Up as an Applicant
          </Link>
        </div>

        <div className="card signup-card">
          <h2>📋 MCAT Support</h2>
          <p>Strategy-first MCAT prep built around you</p>
          <ul className="checklist">
            <li>✓ 1:1 MCAT strategy consultation</li>
            <li>✓ Fully customized study schedule</li>
            <li>✓ Guidance on what resources to use—and when</li>
            <li>✓ Plans adapted to your timeline and financial situation</li>
          </ul>
          <Link
            to="https://forms.gle/qXPy6EYiYMngzjxk7"
            target="_blank"
            rel="noopener noreferrer"
            className="signup-button"
          >
            Get MCAT Help
          </Link>
        </div>

        <div className="card signup-card">
          <h2>📋 Apply to Be a Sensei</h2>
          <p>Mentor future physicians. Make a real impact.</p>
          <ul className="checklist">
            <li>✓ Give back to pre-medical students</li>
            <li>✓ Develop high-impact mentoring skills</li>
            <li>✓ Build real advising and leadership experience</li>
            <li>✓ Celebrate your students' success</li>
          </ul>
          <Link
            to="https://forms.gle/MFHdsqCoCMdk2nrm7"
            target="_blank"
            rel="noopener noreferrer"
            className="signup-button"
          >
            Become a Sensei
          </Link>
        </div>
      </div>
    </section>
  );
}
