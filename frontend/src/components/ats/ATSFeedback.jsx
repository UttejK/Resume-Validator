export default function ATSFeedback({ feedback }) {
  if (!feedback) return null;

  return (
    <div className="card p-4">
      <h5>Feedback</h5>

      <strong>Strengths</strong>
      <ul>
        {feedback.strengths?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <strong>Missing Skills</strong>
      <ul>
        {feedback.missing_skills?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <strong>Improvements</strong>
      <ul>
        {feedback.improvements?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
