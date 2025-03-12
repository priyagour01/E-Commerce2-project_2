import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const Login = () => {
  return (
   <>
   
   <Container>
    <Row>
      <Col xs={12} sm={10} md={8} lg={6} xl={8} className="mx-auto mt-5"> 
    <Card  className="text-center">
      <Card.Header style={{backgroundColor:"blue", color:"white"}}> <h4> Account Registration Form</h4></Card.Header>
      <Card.Body>
       
        <Card.Text>
    
        <Form>
      <Row className="mb-3">
      

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"/>
      </Form.Group>
      </Row>

     

   
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{backgroundColor:"blue", color:"white"}} >National Bank</Card.Footer>
    </Card>
    </Col>
    </Row>
    </Container>
   
   
   
   </>
  )
}

export default Login
