import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AshokPic from "../../ashokpic.jpg"

function Home() {
    return (
        <Container className="my-5">
            <Row className="align-items-center">
                <Col md={6} lg={6}>
                    <div className="content">
                        <p className="subtitle">HELLO</p>
                        <h1 className="title">
                            I'm <span>Ashok<br />a</span> Web Developer
                        </h1>
                        <p className="description">
                            Welcome to my web developer portfolio! I'm Ashok Sudagani is a skilled 
                            software developer specializing in front-end technologies with a focus 
                            on React.js. He has a strong background in JavaScript, HTML, and CSS, 
                            and is experienced with Git for version control. Currently, 
                            I'm is looking for new opportunities in Hyderabad.
                        </p>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <Image
                        src={AshokPic}
                        roundedCircle
                        fluid
                        alt="Round Placeholder"
                        style={{ height: '300px', width: '300px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;