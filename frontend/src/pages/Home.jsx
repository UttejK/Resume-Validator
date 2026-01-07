import { useState } from "react";
import Container from "react-bootstrap/Container";

import ResumeUpload from "../components/resume/ResumeUpload";
import ResumePreview from "../components/resume/ResumePreview";
import ResumeStatus from "../components/resume/ResumeStatus";

import ATSScoreCard from "../components/ats/ATSScoreCard";
import ATSFeedback from "../components/ats/ATSFeedback";

import Loader from "../components/common/Loader";
import Alert from "../components/common/Alert";

export default function Home() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [atsResult, setAtsResult] = useState(null);

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setStatus("uploading");
    setLoading(true);
    setAtsResult(null);

    setTimeout(() => setStatus("scoring"), 1000);

    setTimeout(() => {
      setLoading(false);
      setStatus("ready");
      setAtsResult({
        score: 78,
        strengths: ["Clear React experience", "Good project descriptions"],
        missing_skills: ["Testing (Jest)", "System design"],
        improvements: ["Quantify impact", "Add links to projects"],
      });
    }, 2500);
  };

  return (
    <Container className="py-4">
      {/* CENTERED PAGE COLUMN */}
      <div
        className="mx-auto d-flex flex-column gap-4"
        style={{ maxWidth: "820px" }}
      >
        {/* HEADER */}
        <h3 className="text-center text-md-start">Resume Analyzer</h3>

        {/* UPLOAD */}
        <ResumeUpload onUpload={handleUpload} />

        {/* STATUS */}
        {status && <ResumeStatus status={status} />}

        {/* PREVIEW */}
        {file && <ResumePreview file={file} />}

        {/* LOADER */}
        {loading && <Loader text="Analyzing resume..." />}

        {/* RESULTS */}
        {atsResult && (
          <div className="d-grid gap-3 gap-md-4">
            <div className="d-md-flex gap-4 align-items-stretch">
              <div style={{ minWidth: "220px" }}>
                <ATSScoreCard score={atsResult.score} />
              </div>
              <div className="flex-grow-1">
                <ATSFeedback feedback={atsResult} />
              </div>
            </div>
          </div>
        )}

        {/* ALERT */}
        {alert && (
          <Alert
            variant="danger"
            message={alert}
            onClose={() => setAlert(null)}
          />
        )}
      </div>
    </Container>
  );
}
