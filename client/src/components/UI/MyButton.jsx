import Button from "react-bootstrap/Button";

function MyButton(props) {
    return (
        <Button {...props} style={{ width: "80px" }} variant="primary">
            {props.children}
        </Button>
    );
}

export default MyButton;
