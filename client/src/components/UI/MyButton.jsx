import Button from "react-bootstrap/Button";

function MyButton( props) {
    return (
        <Button {...props} style={{ height: "100%" }} variant="primary">
            {props.children}
        </Button>
    );
}

export default MyButton;
