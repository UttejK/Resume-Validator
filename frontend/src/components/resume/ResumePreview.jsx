import Card from "react-bootstrap/Card";
import { FaFilePdf, FaFileWord } from "react-icons/fa";

export default function ResumePreview({ file }) {
  if (!file) return null;

  const isPdf = file.type === "application/pdf";

  return (
    <Card className="p-3 mt-3">
      <h6>Resume Preview</h6>

      <div className="d-flex align-items-center mb-2">
        {isPdf ? (
          <FaFilePdf className="text-danger me-2" />
        ) : (
          <FaFileWord className="text-primary me-2" />
        )}
        <strong>{file.name}</strong>
        <span className="text-muted ms-2">
          ({(file.size / 1024).toFixed(1)} KB)
        </span>
      </div>

      {isPdf ? (
        <iframe
          src={URL.createObjectURL(file)}
          title="Resume Preview"
          width="100%"
          height="400px"
          style={{ border: "1px solid #ddd" }}
        />
      ) : (
        <p className="text-muted">Preview not available for this file type.</p>
      )}
    </Card>
  );
}
