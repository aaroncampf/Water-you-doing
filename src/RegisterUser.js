import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function RegisterUser() {
    return (
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <InputGroup className="mb-3">
      <InputGroup.Text>First and last name</InputGroup.Text>
      <Form.Control aria-label="First name" />
      <Form.Control aria-label="Last name" />
    </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
        <Form.Control
          placeholder="name@example.com"
          aria-label="email"
          type="email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">User Name</InputGroup.Text>
        <Form.Control
          placeholder="Enter your username"
          aria-label="username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
        <Form.Control
          placeholder="password"
          aria-label="password"
          type="password"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      </Form.Group>
    </Form>
    );
  }
  
  export default RegisterUser;