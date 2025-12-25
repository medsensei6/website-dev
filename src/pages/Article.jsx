import { useParams, Link } from "react-router-dom";

const articleContent = {
  "big-picture-tips": {
    title: "Three Big-Picture Tips for Medical School Applications",
    content: [
      {
        heading: "1. Center Your Application Around What You Genuinely Care About",
        body: "Choose extracurriculars that reflect real interests rather than what you think admissions committees want to see. When your activities are aligned with something you genuinely care about, your motivation, growth, and insight come through naturally in essays and interviews. Authentic interest is easier to sustain - and easier for others to recognize."
      },
      {
        heading: "2. Be Intentional About the Story Your Application Tells",
        body: "Every application tells a story, whether intentional or not. Step back and ask what themes emerge across your activities, experiences, and reflections. Strong applications show a coherent narrative - how your experiences connect, how you’ve grown, and why medicine makes sense in the context of your path."
      },
      {
        heading: "3. Prioritize Depth and Long-Term Commitment Over Volume",
        body: "Sustained involvement in a small number of meaningful activities is generally more compelling than brief participation in many unrelated ones. Long-term commitments signal reliability, maturity, and the ability to grow within an organization - qualities medical schools value highly."
      }
    ]
  },
  "common-essay-mistakes": {
    title: "Three Common Mistakes Applicants Make on Medical School Essays",
    content: [
      {
        heading: "1. Not Using a Grammar Checker",
        body: "Even careful writers miss errors in their own work. Typos, awkward phrasing, and small grammatical mistakes can distract from otherwise strong content. Using a grammar checker - and having at least one other person review your essays - helps ensure your ideas are judged on merit rather than presentation issues."
      },
      {
        heading: "2. Telling Instead of Showing",
        body: "It’s common to state traits you want admissions committees to see (“I’m compassionate,” “I’m resilient”) without demonstrating them. Whenever possible, use specific, concrete anecdotes to illustrate your points. Let the reader infer your qualities from what you did and how you responded, rather than from labels."
      },
      {
        heading: "3. Using Overly Eloquent or “Artsy” Language",
        body: "Unlike undergraduate personal statements, medical school essays are not meant to showcase literary flair. Overly complex sentence structures and ornate vocabulary can obscure your message. Clear, straightforward language makes it easier for admissions committees to understand your experiences, reasoning, and motivation."
      }
    ]
  },
  "3-month-mcat-plan": {
    title: "MedSensei 3-Month MCAT Study Plan",
    content: [
      {
        heading: "A High-Yield, Practice-Driven Approach",
        body: "This 12-week plan is designed to optimize your MCAT preparation with structured, practice-focused strategies."
      },
      {
        heading: "Who This Plan Is For",
        body: "Students who:\n- Can study ~25–40 hours per week\n- Want a structured but flexible roadmap\n- Prefer active learning (practice + Anki) over passive rereading\n- Are aiming for a competitive score, not just a pass"
      },
      {
        heading: "Overview of the Strategy",
        body: "Learn the material → Stress-test it with questions → Calibrate using official exams.\nEach month has a distinct goal:\n- Month 1: Content Foundation (Solid baseline across all subjects)\n- Month 2: Skill Building (Turn knowledge into test performance)\n- Month 3: Exam Mastery (Align thinking with the AAMC)"
      },
      {
        heading: "Month 1: Content Foundation (Weeks 1–4)",
        body: "Primary Goal: Build a complete, test-relevant content foundation without getting stuck in low-yield memorization.\n\nCore Resources:\n- Anki: MilesDown Deck (All sections except Psych/Soc), MrPankow Deck (Psych/Soc only)\n- Books: Kaplan MCAT Books (use selectively to patch weak areas, do not read cover-to-cover)\n- Psych/Soc: 300-page document (primary learning source)\n\nWeekly Structure (Suggested):\n- Daily: Anki reviews (MilesDown + MrPankow), new cards daily\n- Weekly: Identify weak topics from Anki misses, read corresponding Kaplan chapters as needed\n- For Psych/Soc: Read ~75 pages/week, reinforce immediately with MrPankow Anki\n\nKey Rules:\n❌ Do NOT delay Anki until “after content review”\n❌ Do NOT reread Kaplan passively\n✅ Anki is the backbone; books are supplements\n✅ Accuracy > speed at this stage"
      },
      {
        heading: "Month 2: Practice & Skill Building (Weeks 5–8)",
        body: "Primary Goal: Convert content knowledge into MCAT-style reasoning ability.\n\nCore Resources:\n- UWorld Question Bank (Primary)\n- Blueprint Full-Length Exams (Weekly)\n- Anki: Continue daily reviews, finish MrPankow Psych/Soc deck\n\nPractice Strategy:\n- UWorld: Use timed, mixed sets; review every question; create Anki cards for missed concepts, reasoning errors, equations/definitions\n- Full-Length Exams (Blueprint): Take 1 FL/week, simulate test conditions, spend 1–2 full days reviewing each exam\n\nKey Rules:\n❌ Do NOT rush through UWorld just to “finish it”\n❌ Do NOT ignore review days\n✅ Mistakes are your most valuable data\n✅ End this month with Psych/Soc fully completed"
      },
      {
        heading: "Month 3: AAMC Alignment & Final Calibration (Weeks 9–12)",
        body: "Primary Goal: Align your thinking exactly with AAMC test writers.\n\nCore Resources:\n- AAMC Official Materials: Section Banks, Question Packs, Full-Length Exams (1 FL/week)\n- Ongoing: Anki reviews, targeted UWorld or Blueprint review as needed\n\nWeekly Structure:\n- Take one official AAMC full-length exam per week, review in detail over 1–2 days\n- Complete AAMC Section Bank questions, identify persistent content gaps and repeated reasoning errors, light UWorld or notes review only if necessary\n\nFinal Month Mindset:\n- Focus on passage interpretation, experimental design, AAMC logic patterns\n- Protect sleep, consistency, and confidence\n\nFinal Advice from MedSensei:\n- The MCAT rewards process, not perfection\n- Consistency beats intensity\n- If you review your mistakes honestly, you are improving - even on bad days\n- Trust the plan. Trust the work. Then go kill the exam."
      }
    ]
  }
};

export default function Article() {
  const { slug } = useParams();
  const article = articleContent[slug];

  if (!article) return <p>Article not found.</p>;

  // Helper to render bullet points
  const renderParagraphs = (text) => {
    return text.split("\n").map((line, idx) => {
      line = line.trim();
      if (!line) return null;
      if (line.startsWith("- ")) return <li key={idx}>{line.substring(2)}</li>;
      return <p key={idx}>{line}</p>;
    });
  };

  return (
    <div className="article-page">
      <Link to="/resources" className="back-link">&larr; Back to Resources</Link>
      <h1>{article.title}</h1>
      {article.content.map((section, idx) => (
        <section key={idx} className="article-section">
          <h2>{section.heading}</h2>
          {renderParagraphs(section.body)}
        </section>
      ))}
    </div>
  );
}
