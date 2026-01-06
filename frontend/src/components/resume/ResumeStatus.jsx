export default function ResumeStatus({ status }) {
  if (!status) return null;

  const map = {
    uploading: "Uploading resume...",
    scoring: "Scoring with ATS...",
    ready: "Analysis complete",
  };

  return <div className="alert alert-info mt-3">{map[status]}</div>;
}
