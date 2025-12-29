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
          <span className="free-text">Everything is free.</span>
        </p>
      </div>

      {/* Cards */}
      <div className="cards-container">
        <div className="card signup-card">
          <h2>Application Guidance</h2>
          <p>
            Work 1:1 with a Sensei for school lists, essays, interviews, and
            overall application strategy.
          </p>
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
          <h2>MCAT Preparation</h2>
          <p>
            Get personalized MCAT study planning using AAMC-aligned resources
            and realistic schedules.
          </p>
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
          <h2>Apply to be a Sensei</h2>
          <p>
            Mentor applicants, give back, and build advising experience as a
            medical student or high-achieving applicant.
          </p>
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
