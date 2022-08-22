import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardForm(props) {
    return (
        <Card style={{ marginBottom: "10px" }}>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
                <Card.Title
                    required
                    //  style={{ color: props.marked ? "red" : "black" }}
                >
                    {props.title}
                </Card.Title>
                <Card.Text required>{props.text}</Card.Text>
                <Button onClick={() => props.mark(props.id)} variant="primary">
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
