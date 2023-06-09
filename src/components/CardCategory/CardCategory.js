import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

const CardCategory = (props) => {
    return (
        <div>
            <Link to={props.Link} className={"d-inline-block col-2 popCategory w-100 text-decoration-none text-reset"}>
                <Card className={"cardCategory"}>
                    <Card.Img width={120} height={200} className={"category"} variant="top" src={props.Img} />
                    <Card.Body>
                        <Card.Title>{props.Title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default CardCategory;