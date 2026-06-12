// src/pages/Team.jsx
export default function Team() {
  const teamMembers = [
    {
      name: "Vikram Srinath",
      role: "Founder, Head Sensei",
      img: "/team/vikram.png",
      blurb: "522 MCAT, 3.97 GPA. 8 interviews → 4 acceptances. Trustee Scholar, Boston University.",
      linkedin: "https://www.linkedin.com/in/vikram-srinath-48984b204/"
    },
    {
      name: "Carter Taylor",
      role: "Lead Sensei",
      img: "/team/carter.png",
      blurb: "521 MCAT, 3 TMDSAS Interviews, Former VP of Pre-Med Mentoring Club, University of Virginia.",
      linkedin: null
    },
    {
      name: "Rithik Rajasekar",
      role: "Lead MCAT Sensei",
      img: "/team/rithik.png",
      blurb: "525 MCAT, 3.94 GPA, interviews at NYU, Hopkins, UPenn. Summa Cum Laude, UPitt.",
      linkedin: "https://www.linkedin.com/in/rithik-rajasekar/"
    },
    {
      name: "Emily Guo",
      role: "DO Sensei",
      img: "/team/emily.png",
      blurb: "3.88 SMP Boston University, 4/4 DO acceptances (Rowan, NYIT, MSU, Touro).",
      linkedin: "https://www.linkedin.com/in/emily-guo-1329a9379/"
    },
    {
      name: "Edward Stradling",
      role: "Reinvention Sensei",
      img: "/team/edward.png",
      blurb: "2.76 uGPA → 4.00 Post-Bacc GPA → 8 Interviews, accepted USMD. Career changer, finance to medicine.",
      linkedin: "https://www.linkedin.com/in/edward-stradling/"
    },
    {
      name: "Sahana Lothumalla",
      role: "Sensei",
      img: "/team/sahana.png",
      blurb: "UMich Grad, Healthcare Consulting, 2026 Medical School Matriculant. Well-suited for students applying TMDSAS.",
      linkedin: "https://www.linkedin.com/in/sahana-lothumalla/"
    },
  ];

  return (
    <div>
    <div className="team-header">
      <h1>Meet the Team</h1>
    </div>
    <section className="team-container">
      {teamMembers.map(member => {
        const cardContent = (
          <>
            <img
              src={member.img}
              alt={member.name}
              className="team-photo"
            />
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-blurb">{member.blurb}</p>
            </div>
          </>
        );

        return member.linkedin ? (
          <a
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card-link"
          >
            {cardContent}
          </a>
        ) : (
          <div key={member.name} className="team-card-link">
            {cardContent}
          </div>
        );
      })}
    </section>
    </div>
  );
}
