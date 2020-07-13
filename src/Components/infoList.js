import React from "react";
import { Row, Col, Card } from "react-bootstrap"

function InfoList(props){
    return(
        <Row className="h-100">
            {props.listinfo.map((Info) =>
                <Col className="d-flex justify-content-center">
                    <Card className="card-info rounded-circle h-100" key={Info.id}>
                        <Card.Body>
                            <Card.Title className="text-center">{Info.cardTitle}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-center">Card Subtitle</Card.Subtitle>
                            <Card.Text className="text-center">
                                {Info.cardText}
                            </Card.Text>
                            <Card.Text className="text-center">
                                <Card.Link href="#">{Info.cardLink}</Card.Link>
                                <Card.Link href="#">{Info.cardLinkDos}</Card.Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        </Row>
    )
}

export default InfoList