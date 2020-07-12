import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap"

function Info(){
    return(
        <Container fluid className="bg-banner-info">
            <Row className="h-100">
                <Col>
                </Col>
                <Col md="8">
                    <Row className="h-100">
                        <Col>
                            <Card className="card-info rounded-circle h-100">
                                <Card.Body>
                                    <Card.Title className="text-center">Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">Card Subtitle</Card.Subtitle>
                                    <Card.Text className="text-center">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-info rounded-circle h-100">
                                <Card.Body>
                                    <Card.Title className="text-center">Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">Card Subtitle</Card.Subtitle>
                                    <Card.Text className="text-center">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-info rounded-circle h-100">
                                <Card.Body>
                                    <Card.Title className="text-center">Card Title</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center">Card Subtitle</Card.Subtitle>
                                    <Card.Text className="text-center">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text className="text-center">
                                        <Card.Link href="#">Card Link</Card.Link>
                                        <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default Info