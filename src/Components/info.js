import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import InfoList from "./infoList"

class Info extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            data: [{
                "id": 1,
                "cardTitle": "Info 1",
                "cardText": "Some quick example text to build on the card title and make up the bulk of the cards content.",
                "cardLink": "Card Link",
                "cardLinkDos": "Another Link"
            },{
                "id": 2,
                "cardTitle": "Info 2",
                "cardText": "Some quick example text to build on the card title and make up the bulk of the cards content.",
                "cardLink": "Card Link",
                "cardLinkDos": "Another Link"
            },{
                "id": 3,
                "cardTitle": "Info 3",
                "cardText": "Some quick example text to build on the card title and make up the bulk of the cards content.",
                "cardLink": "Card Link",
                "cardLinkDos": "Another Link"
            }]
        }
    }

    render(){
        return(
            <Container fluid className="bg-banner-info">
                <Row className="h-100">
                    <Col>
                    </Col>
                    <Col md="8">
                        <InfoList
                            listinfo={this.state.data}
                        />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Info