import Form from "react-bootstrap/Form";
import MyButton from "./UI/MyButton";

function CreateForm(props) {
    return (
        <Form style={{ display: "flex", flexWrap: "wrap" }}>
            <Form.Group
                style={{ display: "flex", width: " 300px", marginRight: "30px" }}
                className="mb-3"
                controlId="exampleForm.ControlInput1"
            >
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                    <Form.Label style={{ margin: "0" }}>Name</Form.Label>
                </div>
                <Form.Control
                    autocomplete="off"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={props.name}
                    onChange={(e) => props.onChange(e.target)}
                />
            </Form.Group>
            <Form.Group
                style={{ display: "flex", width: " 300px", marginRight: "30px" }}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
            >
                <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                    <Form.Label style={{ margin: "0" }}>Phone</Form.Label>
                </div>
                <Form.Control
                    autocomplete="off"
                    type="text"
                    name="text"
                    placeholder="Phone number"
                    value={props.text}
                    onChange={(e) => props.onChange(e.target)}
                />
            </Form.Group>
            <div>
                <MyButton
                    disabled={props.disabled}
                    style={{ width: "100%" }}
                    onClick={props.onClick}
                >
                    Create
                </MyButton>
            </div>
        </Form>
    );
}

export default CreateForm;
