import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Login from "../components/Login";
import Register from "../components/Register";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");

  const handleOpenModal = (form: "login" | "register") => {
    setActiveForm(form);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <h1 className="text-center mb-4">Welcome to Trivia!</h1>
      <p className="text-center mb-4">Test your knowledge and have fun!</p>
      <div>
        <Button
          variant="primary"
          className="me-3"
          onClick={() => handleOpenModal("login")}
        >
          Login
        </Button>
        <Button
          variant="secondary"
          onClick={() => handleOpenModal("register")}
        >
          Register
        </Button>
      </div>

      {/* Modal for Login and Register */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {activeForm === "login" ? "Login" : "Register"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {activeForm === "login" ? (
            <Login />
          ) : (
            <Register />
          )}
        </Modal.Body>
        <Modal.Footer>
          {activeForm === "login" ? (
            <p className="m-0">
              Don’t have an account?{" "}
              <Button
                variant="link"
                onClick={() => setActiveForm("register")}
              >
                Register
              </Button>
            </p>
          ) : (
            <p className="m-0">
              Already have an account?{" "}
              <Button
                variant="link"
                onClick={() => setActiveForm("login")}
              >
                Login
              </Button>
            </p>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Welcome;