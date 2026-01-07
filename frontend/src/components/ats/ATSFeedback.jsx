import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

export default function ATSFeedback({ feedback }) {
  if (!feedback) return null;

  const sections = [
    {
      title: "Strengths",
      items: feedback.strengths,
      variant: "success",
    },
    {
      title: "Missing Skills",
      items: feedback.missing_skills,
      variant: "warning",
    },
    {
      title: "Improvements",
      items: feedback.improvements,
      variant: "info",
    },
  ];

  return (
    <Card className="p-3 p-md-4">
      <h5 className="mb-3 text-center text-md-start">Feedback</h5>

      <div className="d-flex flex-column gap-3">
        {sections.map(
          ({ title, items, variant }) =>
            items?.length > 0 && (
              <div key={title}>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <strong>{title}</strong>
                  <Badge bg={variant}>{items.length}</Badge>
                </div>

                <ListGroup variant="flush">
                  {items.map((item, index) => (
                    <ListGroup.Item key={index} className="px-0">
                      {item}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            )
        )}
      </div>
    </Card>
  );
}
