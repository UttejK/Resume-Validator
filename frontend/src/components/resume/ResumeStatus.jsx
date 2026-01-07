import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

export default function ResumeStatus({ status }) {
  if (!status) return null;

  const statusMap = {
    uploading: {
      text: "Uploading resume…",
      variant: "info",
      loading: true,
    },
    scoring: {
      text: "Scoring with ATS…",
      variant: "info",
      loading: true,
    },
    ready: {
      text: "Analysis complete",
      variant: "success",
      loading: false,
    },
  };

  const current = statusMap[status];
  if (!current) return null;

  return (
    <Alert
      variant={current.variant}
      className="mt-3 mb-0 d-flex align-items-center gap-2 py-2 py-md-3"
    >
      {current.loading && (
        <Spinner animation="border" size="sm" className="shrink-0" />
      )}

      <span className="small small-md">{current.text}</span>
    </Alert>
  );
}
