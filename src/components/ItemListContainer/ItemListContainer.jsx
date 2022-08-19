//import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const ItemListContainer = (prop) => {
    return (
        <>
            <h2>{prop.saludo}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus temporibus ipsum culpa vitae laboriosam iure,
                dolorem aspernatur vel esse aliquam error dolor cumque illum
                mollitia est debitis, molestias tempore minima!
            </p>
            {/* <div class="container"></div> */}
            {/* <Container fluid>
                <Row>
                    <Col md={4}>1</Col>
                    <Col md={4}>2</Col>
                    <Col md={4}>3</Col>
                </Row>
            </Container> */}
            {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
        </>
    );
};

export default ItemListContainer;

/* BOOTSTRAP COMO UTLIZABAMOS EN DW */

/*             <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <a href="https://google.com" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div> */
