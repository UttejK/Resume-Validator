import RBAlert from "react-bootstrap/Alert";

export default function Alert({ variant = "info", message, onClose }) {
  if (!message) return null;

  return (
    <RBAlert variant={variant} dismissible onClose={onClose}>
      {message}
    </RBAlert>
  );
}
