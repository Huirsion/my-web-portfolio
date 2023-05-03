import { Container, Row, Col } from "react-bootstrap";
import PortfolioCards from "./PortfolioCards";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "../style/Portfolio.css";

const Portfolio = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            projectLink: "example1",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            projectLink: "example1",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            projectLink: "example1",
            imgUrl: projImg3,
        },
    ]

    return(
        <section className="portfolio" id="portfolio">
            <Container>
                <Row>
                    <Col>
                        <h2>Portfolios</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <Row>
                            {
                                projects.map((project, index)=> {
                                    return(
                                        <PortfolioCards
                                            key={index}
                                            {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Portfolio;