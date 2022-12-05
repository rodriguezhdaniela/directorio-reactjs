import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import { listRestaurants } from '../directoryService';

function Lists() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    const getRestaurants = async () => {
        try{
            const restaurantsFirebase = await listRestaurants();
            setRestaurants(restaurantsFirebase)
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Container className="contain-restaurant">
            <h1 className="pt-4 pb-4">Directorio Restaurente</h1>
            <Row className="mt-4" md={3}>
                {restaurants.map(item => (
                    <Col className="md-4" key={item.id}>
                    <Card className="mb-4 box-shadow">
                        <Card.Img 
                            className="card-img-top"
                            src={item.image}
                            alt="foto restaurante"
                            style={{ height: '225px'}}
                        />
                        <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Text>{item.address}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Lists;