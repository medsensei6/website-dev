import { Link } from "react-router-dom";

const articles = [
  {
    title: "Three Big-Picture Tips for Medical School Applications",
    summary: "Learn how to center your application around genuine interests, tell a coherent story, and prioritize depth over volume.",
    slug: "big-picture-tips"
  },
  {
    title: "Three Common Mistakes Applicants Make on Medical School Essays",
    summary: "Avoid grammar errors, showing instead of telling, and overcomplicating your language to make your essays stand out.",
    slug: "common-essay-mistakes"
  },
  {
    title: "MedSensei 3-Month MCAT Study Plan",
    summary: "A structured, practice-driven roadmap for the MCAT, designed to build content mastery, skills, and exam alignment in 12 weeks.",
    slug: "3-month-mcat-plan"
  }
];

export default function Resources() {
  return (
    <div className="resources-page">
      <header className="resources-header">
        <h1>Resources</h1>
        <p>Explore MedSensei articles and guides to optimize your medical school journey.</p>
      </header>

      <section className="resources-list">
        {articles.map(article => (
          <Link
            to={`/resources/${article.slug}`}
            key={article.slug}
            className="resource-card"
          >
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
