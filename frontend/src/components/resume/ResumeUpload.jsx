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
    <Card className="p-4">
      <h5 className="mb-3">Upload Resume</h5>

      <div
        {...getRootProps()}
        className={`border rounded p-4 text-center ${
          isDragActive ? "bg-light border-primary" : "border-secondary"
        }`}
        style={{ cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <FaUpload size={24} className="mb-2" />
        <p className="mb-1">
          {isDragActive
            ? "Drop your resume here..."
            : "Drag & drop your resume here, or click to select"}
        </p>
        <small className="text-muted">PDF, DOC, DOCX only</small>
      </div>

      {file && (
        <div className="mt-3 d-flex align-items-center">
          <FaFilePdf className="me-2 text-danger" />
          <span>{file.name}</span>
        </div>
      )}

      <Button className="mt-3" disabled={!file} onClick={() => onUpload(file)}>
        Analyze Resume
      </Button>
    </Card>
  );
}
