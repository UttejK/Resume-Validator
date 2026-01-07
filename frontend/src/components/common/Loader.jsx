import Spinner from "react-bootstrap/Spinner";

export default function Loader({ text = "Loading…" }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-3 py-md-4">
      <Spinner animation="border" role="status" className="mb-2">
        <span className="visually-hidden">Loading</span>
      </Spinner>

      <span className="text-muted small text-center">{text}</span>
    </div>
  );
}
