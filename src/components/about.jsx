import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image from '../assets/images/img1.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
function about() {
    const html = 80
    const responsive=95
    const PHOTOSHOP=60
  return (
 <section id='about' className='block about-block'>
     <Container fluid>
        <div className='title-holder'>
           <h2>ABOUT US</h2>
           <div className='sub-title'>
               learn more about us
           </div>
        </div>
      <Row>
        <Col sm={6} ><Image src={image}/></Col>
        <Col sm={6} > <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dicta veritatis sint quidem asperiores magni eaque praesentium temporibus, magnam, eveniet consequatur possimus nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae alias ex error distinctio laudantium recusandae, iure. Vel nisi soluta, minus consectetur reiciendis laborum, laudantium perspiciatis quos molestias quam eum.</p>
            <h4>HTML|CSS|JAVASCRIPT</h4>
            <ProgressBar now={html} label={`${html}%`} />
            <h4>RESPONSIVE</h4>
            <ProgressBar now={responsive} label={`${responsive}%`} />
            <h4>PHOTOSHOP</h4>
            <ProgressBar now={PHOTOSHOP} label={`${PHOTOSHOP}%`} />
            </Col>
           
      </Row>
    </Container>

 </section>
  )
}

export default about
