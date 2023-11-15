// import React from 'react';

// const Form = () =>{
//   return (
//     <div>
//      Form
//     </div>
//   );
// }

// export default Form;


import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    photo: '',
    education: '',
    work: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formSurname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the URL of your photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEducation">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formWork">
              <Form.Label>Work</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your work"
                name="work"
                value={formData.work}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyForm;

