import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuth } from "../../contexts/Auth";

function Register() {

    const { signUp } = useAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: any) => {
    
    e.preventDefault();
    signUp(userData);
    setUserData({
        name: "",
        email: "",
        password: "",
    })
  }

  return (
    <Form
    onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
            value={userData.name}
          onChange={(e) => {
            setUserData({
              ...userData,
              name: e.target.value,
            });
          }}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
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
        <Form.Control type="password" placeholder="Password" 
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

export default Register;
