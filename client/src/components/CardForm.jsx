import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardForm(props) {
    return (
        <Card style={{ marginBottom: "10px", maxWidth: "800px" }}>
            <Card.Body>
                <Card.Title style={{ color: props.marked ? "red" : "black" }}>
                    {props.title}
                </Card.Title>
                <Card.Text>{props.text}</Card.Text>
                <Button
                    style={{ marginRight: "10px" }}
                    onClick={() => props.mark(props.id)}
                    variant="primary"
                >
                    Mark
                </Button>
                <Button onClick={() => props.delete(props.id)} variant="danger">
                    Delete
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardForm;
