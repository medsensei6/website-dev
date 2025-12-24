export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>MedSensei: Equitable Application Advising</h1>
        <p>
          Personalized guidance for aspiring physicians — completely free. 
          Navigate medical school applications with expert support.
        </p>
        <a href="/signup" className="cta-button">Sign Up Now</a>
      </section>

      <section className="cards-container">
        <div className="card">
          <h3>Applicants</h3>
          <ul>
            <li>Personalized guidance</li>
            <li>School list development</li>
            <li>Mock interviews</li>
          </ul>
        </div>
        <div className="card">
          <h3>Senseis</h3>
          <ul>
            <li>Help 2–5 applicants</li>
            <li>Optional MCAT support</li>
          </ul>
        </div>
        <div className="card">
          <h3>MCAT Planning</h3>
          <p>Comprehensive planning using AAMC resources.</p>
        </div>
      </section>
    </div>
  );
}
