import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function ATSScoreCard({ score }) {
  if (typeof score !== "number") return null;

  const isGood = score >= 70;

  return (
    <Card className="text-center p-3 p-md-4 mb-3">
      <Card.Title className="mb-2">ATS Score</Card.Title>

      {/* Score */}
      <div
        className={`fw-bold display-5 display-md-4 ${
          isGood ? "text-success" : "text-warning"
        }`}
      >
        {score}%
      </div>

      {/* Visual indicator */}
      <ProgressBar
        now={score}
        variant={isGood ? "success" : "warning"}
        className="mt-3"
        style={{ height: "8px" }}
      />
    </Card>
  );
}
