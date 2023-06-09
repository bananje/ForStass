import React from 'react';
import './Card.css';
import img from "../../img/chainsawCard.jpg";
import {Button, Col, Row} from "react-bootstrap";

const Card = (props) => {
    console.log(props.data);
    return (
        <div className="productItem">
            <Row>
                <Col>
                    <img className={"imageProduct"} src={img}/>
                </Col>
                <Col>
                    <Row>
                        <h5>
                            {props.data.name}
                        </h5>
                    </Row>
                    <Row>
                        <p>
                            {props.data.shortDesc}
                        </p>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Цена: 10000
                            </p>
                        </Col>
                        <Col>
                            <p>
                                {props.Price}
                            </p>
                        </Col>
                        <Col>
                            <Button>
                                Добавить в корзину
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Card;