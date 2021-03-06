import React, { useState } from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import MyDatePicker from "./MyDatePicker";


const AddToDo = (props) => {
  const [toDo, setToDo] = useState({
    description: '',
    date: null,
  });

  const inputChanged = (event) => {
    setToDo({...toDo, [event.target.name]: event.target.value});
  };

  const dateChanged = (date) => {
    setToDo({...toDo, date: date});
  };

  const clearOnSubmit = (event) => {
    event.preventDefault();
    setToDo({
      description: '',
      date: null,
    });
  };

  const handleAdding = () => {
    props.onAddingItem(toDo);
  };

  return (
    <div>
      <Container className={'mt-3 pl-0 pr-0'}>
        <Container className='block-example border border-primary p-3 rounded mb-0'>
          <Form onSubmit={clearOnSubmit} inline >
            <Form.Row className='align-items-center'>
              <Col xs='auto'>
                <Form.Group>
                  <Form.Label>Description: </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter description'
                    name='description'
                    value={toDo.description}
                    onChange={inputChanged}
                    className='ml-2'
                    required
                  />
                </Form.Group>
              </Col>

              <Col xs='auto'>
                <Form.Group>
                  <Form.Label>Date: </Form.Label>
                  <MyDatePicker
                    value={toDo.date}
                    onEditingDate={dateChanged}
                  />
                </Form.Group>
              </Col>

              <Col xs='auto'>
                <Button variant='primary' type='submit' onClick={handleAdding}>
                  Add
                </Button>
              </Col>

            </Form.Row>
          </Form>
        </Container>
      </Container>
    </div>
  );
}

export default AddToDo;
