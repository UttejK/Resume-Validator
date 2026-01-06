import Spinner from "react-bootstrap/Spinner";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="d-flex flex-column align-items-center py-4">
      <Spinner animation="border" role="status" />
      <span className="mt-2 text-muted">{text}</span>
    </div>
  );
}
