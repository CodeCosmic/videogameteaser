import { useState } from "react";
import { Button, Label, Col, FormGroup, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactUs = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    return (        
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                agree: false,
                feedback: ''
            }}
            onSubmit={handleSubmit}
            //validate={validateContactUs}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>                                   
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> 
                    </Col>                                   
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage> 
                    </Col>                                  
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>                                   
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>                                    
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='password' md='2'>
                        Password
                    </Label> 
                    <Col md='10'>                                  
                        <Field 
                            name='password'
                            placeholder='Password'
                            type='password'
                            className='form-control'
                        />
                        <ErrorMessage name='password'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>                                   
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='feedback' md='2'>
                        Your Feedback
                    </Label>
                    <Col md='10'>                                    
                        <Field
                            name='feedback'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />  
                    </Col>                                  
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Button type='submit' color='primary'>
                            Send Feedback
                        </Button>
                    </Col>                                   
                </FormGroup>
            </Form>
        </Formik>                
    );
};

export default ContactUs;
