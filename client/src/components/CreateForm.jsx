import Form from "react-bootstrap/Form";
import MyButton from "./UI/MyButton";

function CreateForm(props) {
    return (
        <Form>
            <div style={{ display: "flex" }}>
                <Form.Group
                    style={{ width: " 300px", marginRight: "30px" }}
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={props.name}
                        onChange={(e) => props.onChange(e.target)}
                    />
                </Form.Group>
                <Form.Group
                    style={{ width: " 300px" }}
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                        type="text"
                        name="text"
                        value={props.text}
                        onChange={(e) => props.onChange(e.target)}
                    />
                </Form.Group>
            </div>
            <MyButton onClick={props.onClick}> Create</MyButton>{" "}
        </Form>
    );
}

export default CreateForm;
