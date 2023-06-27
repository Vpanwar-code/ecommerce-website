import React from 'react';
import {Container, Row,Col,Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const About=()=>{

    return(
        <Container>
            <Row>
                <Col xs={6} md={4}>
                <Image src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png" roundedCircle/>
                </Col>
            </Row>
            <Row>
                <Col>
                  <p>
                   Music is a pleasant sound which is a combination of melodies and harmony and which soothes you. 
                   Music may also refer to the art of composing such pleasant sounds with the help of the various
                   musical instruments. A person who knows music is a Musician. The music consists of Sargam, Ragas,
                   Taals, etc.
                  </p>
                </Col>
            </Row>
        </Container>
    )
}
export default About;