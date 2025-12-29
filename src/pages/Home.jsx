import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1><span className="brand">MedSensei</span></h1>
          <br />
          <h2>Equitable Application Advising</h2>
          <p className="hero-subtitle">
            Personalized guidance for aspiring physicians.
            <br/>
            Navigate medical school applications with expert, human support.
            <br/>
            <span className="free-text">Everything is free.</span>
          </p>
          {/* <Link to="/signup" className="cta-button">Sign Up</Link> */}
        </div>
      </section>

      {/* MISSION */}
      <section className="mission">
        <h2>Leveling the Playing Field</h2>
        <p>
          The medical school application process is undoubtedly challenging.
          Many pre-meds are pushed toward expensive consulting services that
          can cost <strong>tens of thousands of dollars</strong>.
        </p>
        <p>
          MedSensei was built to change that. We provide
          personalized application support so that <strong>every single applicant </strong>
          has a fair chance, regardless of socioeconomic status.
        </p>
        <p className="emphasis">
          <span className="free-text">Everything is free.</span>
        </p>
      </section>

      {/* SERVICES */}
      <section className="cards-container">
        <div className="card">
          <h3>Applicants</h3>
          <ul>
            <li>Personalized 1:1 guidance</li>
            <li>School list development</li>
            <li>Mock interviews & feedback</li>
          </ul>
        </div>

        <div className="card">
          <h3>MCAT Planning</h3>
          <ul>
            <p>
              <li>Comprehensive study planning</li>
              <li>AAMC-aligned resources</li>
              <li>Personalized to <strong>you</strong></li>
            </p>
          </ul>
        </div>

        <div className="card">
          <h3>Senseis</h3>
          <ul>
            <li>Mentor 2–5 applicants</li>
            <li>Flexible time commitment</li>
            <li>Optional MCAT advising</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Testimonials</h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <img
              src="/team/rithik.png"
              alt="Rithik"
              className="testimonial-avatar"
            />
            <p>
              “MedSensei was instrumental in helping me plan my MCAT study strategy.
              They created a personalized schedule that fit my needs. Thanks to
              their support, I felt much more confident heading into the exam.”
            </p>
            <span className="author">
              -  Rithik, <strong>525 MCAT scorer</strong>
            </span>
          </div>

          <div className="testimonial-card">
            <img
              src="/team/sarah.png"
              alt="Sarah"
              className="testimonial-avatar"
            />
            <p>
              “MedSensei helped me prepare for my first traditional interview,
              tailoring my responses to each school’s mission. Their question
              bank and continued encouragement helped me confidently ace my
              interviews.”
            </p>
            <span className="author">
              -  Sarah, <strong>M1 at Sidney Kimmel Medical College</strong>
            </span>
          </div>
        </div>
      </section>


      {/* DONATION */}
      <section className="donation">
        <h2>Pay It Forward</h2>
        <p>
          If you found MedSensei helpful and would like to donate, you’re welcome
          to do so. <strong>100% of donations</strong> are directed toward
          humanitarian causes around the world.
        </p>

        <a
          href="https://givebutter.com/R3LjRq"
          target="_blank"
          rel="noopener noreferrer"
          className="donate-button"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
}
