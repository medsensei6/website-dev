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
      name: "Diana Tam",
      role: "Recruiter",
      img: "/team/diana.png",
      // blurb: "MPH, Boston University. Clinical Research Coordinator. Lorem ipsum dolor.",
      blurb: "Recruiter at MedSensei. Clinical Research Coordinator. MPH, Boston University.",
      linkedin: "https://www.linkedin.com/in/diana-tam/"
    },
    {
      name: "Rithik Rajasekar",
      role: "Head MCAT Strategist, Sensei",
      img: "/team/rithik.png",
      blurb: "525 MCAT, 3.94 GPA, interviews at NYU, Hopkins, UPenn. Summa Cum Laude, UPitt.",
      linkedin: "https://www.linkedin.com/in/rithik-rajasekar/"
    },
    // {
    //   name: "Rithik Rajasekar",
    //   role: "Head MCAT Strategist, Sensei",
    //   img: "/team/rithik.png",
    //   blurb: "525 MCAT, 3.94 GPA, interviews at NYU, Hopkins, UPenn. Summa Cum Laude, UPitt.",
    //   linkedin: "https://www.linkedin.com/in/rithik-rajasekar/"
    // },
    // {
    //   name: "Rithik Rajasekar",
    //   role: "Head MCAT Strategist, Sensei",
    //   img: "/team/rithik.png",
    //   blurb: "525 MCAT, 3.94 GPA, interviews at NYU, Hopkins, UPenn. Summa Cum Laude, UPitt.",
    //   linkedin: "https://www.linkedin.com/in/rithik-rajasekar/"
    // }
  ];

  return (
    <div>
    <div className="team-header">
      <h1>Meet the Team</h1>
    </div>
    <section className="team-container">
      {teamMembers.map(member => (
        <a
          key={member.name}
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="team-card-link"
        >
          <div className="team-card">
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
          </div>
        </a>
      ))}
    </section>
    </div>
  );
}
