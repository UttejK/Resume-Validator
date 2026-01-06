import Card from "react-bootstrap/Card";

export default function ATSScoreCard({ score }) {
  if (score === undefined) return null;

  return (
    <Card className="text-center mb-3 p-3">
      <Card.Title>ATS Score</Card.Title>
      <h1 className={score > 70 ? "text-success" : "text-warning"}>{score}%</h1>
    </Card>
  );
}
