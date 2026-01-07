import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUpload, FaFilePdf } from "react-icons/fa";

export default function ResumeUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    multiple: false,
  });

  return (
    <Card className="p-3 p-md-4">
      <h5 className="mb-3 text-center text-md-start">Upload Resume</h5>

      <div
        {...getRootProps()}
        className={`border rounded text-center p-3 p-md-4 ${
          isDragActive ? "bg-light border-primary" : "border-secondary"
        }`}
        style={{ cursor: "pointer" }}
      >
        <input {...getInputProps()} />

        {/* Upload icon */}
        <div className="mb-2">
          <FaUpload className="fs-5 d-md-none" />
          <FaUpload className="fs-4 d-none d-md-inline" />
        </div>

        {/* Instructions */}
        <p className="mb-1 small">
          {isDragActive
            ? "Drop your resume here..."
            : "Drag & drop your resume here, or tap to select"}
        </p>

        <small className="text-muted">PDF, DOC, DOCX only</small>
      </div>

      {/* Selected file */}
      {file && (
        <div className="mt-3 d-flex align-items-center">
          <FaFilePdf className="me-2 text-danger shrink-0" />
          <span className="text-truncate" style={{ maxWidth: "100%" }}>
            {file.name}
          </span>
        </div>
      )}

      {/* CTA */}
      <Button
        className="mt-4 w-100"
        disabled={!file}
        onClick={() => onUpload(file)}
      >
        Analyze Resume
      </Button>
    </Card>
  );
}
