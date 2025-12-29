import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHandshake, FaPhone, FaChartLine, FaPencilAlt, FaEye, FaFileAlt, FaComments, FaGraduationCap, FaRocket } from "react-icons/fa";

const mcatSteps = [
  {
    title: "Sign Up",
    content: "Meet with one of our Senseis to discuss your unique needs and circumstances.",
    link: "/signup",
    icon: FaHandshake,
    color: "#2563eb" // primary blue
  },
  {
    title: "1:1 Strategy Call",
    content: "A Sensei will help you build a schedule suited for you.",
    resourceLink: "#",
    icon: FaPhone,
    color: "#2563eb" // primary blue
  },
  {
    title: "Follow-Up",
    content: "Update us on your progress and make adjustments if necessary.",
    icon: FaChartLine,
    color: "#2563eb" // primary blue
  },
  {
    title: "Exam Day",
    content: "Go kill the exam on test day!",
    icon: FaRocket,
    color: "#2563eb" // primary blue
  }
];

const appSteps = [
  {
    title: "Sign Up",
    content: "You will be matched to a Sensei based on your unique needs and experiences.",
    link: "/signup",
    icon: FaHandshake,
    color: "#2563eb" // primary blue
  },
  {
    title: "1:1 Meeting",
    content: "Your respective Sensei will have a one-on-one call with you, discussing your school list, extracurriculars, and any drafts of your Personal Statement.",
    icon: FaPhone,
    color: "#2563eb" // primary blue
  },
  {
    title: "PS/Activities",
    content: "You will work closely with a Sensei on your Personal Statement and Activities List, making everything a cohesive story.",
    icon: FaPencilAlt,
    color: "#2563eb" // primary blue
  },
  {
    title: "Second Look",
    content: "Once your essays are finalized, another Sensei will look over them to ensure that they are ready to go.",
    icon: FaEye,
    color: "#2563eb" // primary blue
  },
  {
    title: "Secondaries",
    content: "Pre-write and complete secondaries as they are released.",
    icon: FaFileAlt,
    color: "#2563eb" // primary blue
  },
  {
    title: "Interviews",
    content: "Prepare for interviews with multiple Senseis.",
    icon: FaComments,
    color: "#2563eb" // primary blue
  },
  {
    title: "Acceptance",
    content: "Fulfill your dreams of getting into medical school!",
    icon: FaGraduationCap,
    color: "#2563eb" // primary blue
  }
];

function FlowBubble({ step, isExpanded, onToggle, position }) {
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const Icon = step.icon;

  // When expanded, move to center of circle
  const expandedPosition = isExpanded ? {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  } : position;

  return (
    <>
      {/* Connection line from original position to center when expanded */}
      {isExpanded && (
        <svg
          className="bubble-connection"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1={position.left}
            y1={position.top}
            x2="50%"
            y2="50%"
            stroke={step.color}
            strokeWidth="0.3"
            opacity="0.4"
          />
        </svg>
      )}

      <div
        className={`flow-bubble-wrapper ${isExpanded ? 'expanded' : ''}`}
        style={expandedPosition}
      >
        <div
          className={`flow-bubble ${isExpanded ? 'expanded' : ''}`}
          onClick={onToggle}
          style={{
            borderColor: step.color
          }}
        >
          <div className="bubble-title">
            {Icon && (
              <div className="bubble-icon">
                <Icon />
              </div>
            )}
            <span>{step.title}</span>
          </div>
          {isExpanded && (
            <div className="bubble-content">
              <p>{step.content}</p>
              {step.link && (
                <Link
                  to={step.link}
                  className="bubble-link"
                  onClick={handleLinkClick}
                >
                  Sign up →
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function CurvedArrow({ index, total, radius = 45 }) {
  // Calculate start and end positions at the CENTER of circles
  const startAngle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const endAngle = ((index + 1) / total) * 2 * Math.PI - Math.PI / 2;
  const midAngle = (startAngle + endAngle) / 2;

  // Start and end at circle centers
  const startX = 50 + radius * Math.cos(startAngle);
  const startY = 50 + radius * Math.sin(startAngle);
  const endX = 50 + radius * Math.cos(endAngle);
  const endY = 50 + radius * Math.sin(endAngle);

  // Calculate midpoint on the circular arc for arrowhead
  const arrowHeadX = 50 + radius * Math.cos(midAngle);
  const arrowHeadY = 50 + radius * Math.sin(midAngle);

  // Calculate tangent direction at midpoint (perpendicular to radius)
  const angle = (midAngle * 180 / Math.PI) + 90; // +90 for tangent direction

  // Create SVG arc path - use elliptical arc command
  // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  const pathD = `M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`;

  // Calculate arrowhead points
  const arrowSize = 1.2;
  const angleRad = angle * Math.PI / 180;

  // Three points of the arrow triangle
  const arrowTip = {
    x: arrowHeadX + Math.cos(angleRad) * arrowSize * 0.5,
    y: arrowHeadY + Math.sin(angleRad) * arrowSize * 0.5
  };
  const arrowLeft = {
    x: arrowHeadX + Math.cos(angleRad - 2.5) * arrowSize,
    y: arrowHeadY + Math.sin(angleRad - 2.5) * arrowSize
  };
  const arrowRight = {
    x: arrowHeadX + Math.cos(angleRad + 2.5) * arrowSize,
    y: arrowHeadY + Math.sin(angleRad + 2.5) * arrowSize
  };

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'visible'
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Main curved line */}
      <path
        d={pathD}
        fill="none"
        stroke="var(--color-primary-blue)"
        strokeWidth="0.4"
        opacity="0.6"
      />
      {/* Arrowhead triangle at midpoint */}
      <polygon
        points={`${arrowTip.x},${arrowTip.y} ${arrowLeft.x},${arrowLeft.y} ${arrowRight.x},${arrowRight.y}`}
        fill="var(--color-primary-blue)"
        opacity="0.7"
      />
    </svg>
  );
}

function getCircularPosition(index, total, radius = 45) {
  // Start from top (12 o'clock) and go clockwise
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);

  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)'
  };
}


export default function ProcessFlow() {
  const [expandedMCAT, setExpandedMCAT] = useState(null);
  const [expandedApp, setExpandedApp] = useState(null);

  return (
    <section className="process-flow">
      <h2>Our Process</h2>
      <p>We personalize guidance to each individual, building pathways for success.</p>

      <div className="flow-sections-container">
        {/* MCAT Strategy */}
        <div className="flow-section">
          <div className="flow-circle">
            <div className="circle-center-label">MCAT Strategy</div>
            {mcatSteps.map((step, index) => (
              <FlowBubble
                key={index}
                step={step}
                isExpanded={expandedMCAT === index}
                onToggle={() => setExpandedMCAT(expandedMCAT === index ? null : index)}
                position={getCircularPosition(index, mcatSteps.length)}
              />
            ))}
            {mcatSteps.map((_, index) =>
              index < mcatSteps.length - 1 ? (
                <CurvedArrow key={`arrow-${index}`} index={index} total={mcatSteps.length} />
              ) : null
            )}
          </div>
        </div>

        {/* Application Process */}
        <div className="flow-section">
          <div className="flow-circle">
            <div className="circle-center-label">Application Process</div>
            {appSteps.map((step, index) => (
              <FlowBubble
                key={index}
                step={step}
                isExpanded={expandedApp === index}
                onToggle={() => setExpandedApp(expandedApp === index ? null : index)}
                position={getCircularPosition(index, appSteps.length)}
              />
            ))}
            {appSteps.map((_, index) =>
              index < appSteps.length - 1 ? (
                <CurvedArrow key={`arrow-${index}`} index={index} total={appSteps.length} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
