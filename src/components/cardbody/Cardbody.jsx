import Card from 'react-bootstrap/Card';

function Cardbody({ image, title, description }) {
  return (
    <Card className="h-100 shadow text-center bg-lime-100">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ width: "64px", height: "64px", objectFit: "contain", margin: "1rem auto" }}
      />
      <Card.Body>
        <Card.Title className="fw-bold text-gray-800 text-lg mb-2">{title}</Card.Title>
        <Card.Text className="text-gray-600 text-sm leading-relaxed">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardbody;