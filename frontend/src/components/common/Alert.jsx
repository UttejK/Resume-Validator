import Alert from "react-bootstrap/Alert";

export default function AppAlert({ variant = "info", message, onClose }) {
  if (!message) return null;

  return (
    <Alert
      variant={variant}
      dismissible={Boolean(onClose)}
      onClose={onClose}
      className="mb-3 py-2 py-md-3"
    >
      <div className="small text-center text-md-start">{message}</div>
    </Alert>
  );
}
