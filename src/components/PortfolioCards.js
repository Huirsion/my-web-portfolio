import { Col } from "react-bootstrap"

const PortfolioCards = ({ title, description, projectLink, imgUrl }) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-img">
                <img src={imgUrl} />    
            </div>
            <div className="proj-descript">
                <h4>{title}</h4>
                <div>{description}</div>
                <div>{projectLink}</div>
            </div>
        </Col>
    )
}

export default PortfolioCards;