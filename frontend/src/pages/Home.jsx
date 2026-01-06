import { useState } from "react";

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

  // Mock ATS result
  const [atsResult, setAtsResult] = useState(null);

  const handleUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setStatus("uploading");

    // simulate backend flow
    setLoading(true);

    setTimeout(() => {
      setStatus("scoring");
    }, 1000);

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
    <>
      <h3 className="mb-3">Resume Analyzer</h3>

      <ResumeUpload onUpload={handleUpload} />

      <ResumeStatus status={status} />

      {file && <ResumePreview file={file} />}

      {loading && <Loader text="Analyzing resume..." />}

      {atsResult && (
        <>
          <ATSScoreCard score={atsResult.score} />
          <ATSFeedback feedback={atsResult} />
        </>
      )}

      <Alert variant="danger" message={alert} onClose={() => setAlert(null)} />
    </>
  );
}
