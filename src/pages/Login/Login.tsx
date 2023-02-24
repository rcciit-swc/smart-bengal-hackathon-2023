import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { adminPortalRoute } from "../../Routes";

function Login() {
  const { login, currentUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate(adminPortalRoute);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userData.email}
          onChange={(e) => {
            setUserData({
              ...userData,
              email: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={(e) => {
            setUserData({
              ...userData,
              password: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
