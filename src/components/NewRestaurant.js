import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'
import { createRestaurant } from '../directoryService'

function NewRestaurant() {
    const [restaurant, setRestaurant] = useState({});

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRestaurant(values => ({...values, [name]: value}))
    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
       
        try{
            createRestaurant(restaurant)
            setRestaurant([])
        } catch(e){
            console.log(e)
        }
    };


    return (
        <Container>
            <h1 className="pt-4 pb-4">Nuevo Restaurante</h1>
            <Form onSubmit={(e) => handleOnSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Name" name="name" value={ restaurant.name || ''} onChange={(e) => {handleOnChange(e)}} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" name="description" value={restaurant.description || ''} onChange={ (e) => {handleOnChange(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Address" name="address" value={restaurant.address || ''} onChange={ (e) => {handleOnChange(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Url de la imagen</Form.Label>
                    <Form.Control type="text" name="url" placeholder="image url" value={restaurant.url || ''} onChange={ (e) => {handleOnChange(e)}}/>
                </Form.Group>
                <Button type="submit">crear</Button>
            </Form>
        </Container>
        
    );
}

export default NewRestaurant;