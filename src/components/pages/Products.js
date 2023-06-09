import React, {useEffect, useState} from 'react';
import './styles/Products.css';
import {Col, Container, Row} from "react-bootstrap";
import {TextField} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
import ReactPaginate from "react-paginate";
import axios from "axios";

const Products = () => {

    const [value, setValue] = useState('');
    const [data,setData] = useState([]);
    const [sortValue, setSortValue] = useState('');
    const sortOptions =[
        {
            title: "Категории",
            value: "categories"
        },
        {
            title: "Производителю",
            value: "manufacturers"
        },
    ]

    useEffect(() => {
        loadData()
    }, [])

    const loadData = async () => {
        return  await axios
            .get(`https://localhost:7047/api/Products/GetAll`)
            .then((response) =>
            {
                setData(response.data);
                console.log(data);
            })
            .catch((err) => console.log(err));
    }
    const handleSort = async (e) => {
        setSortValue(e.target.value)
        return await axios
            .get(`https://localhost:7047/api/Products/FilterByCategory?criteria=${sortValue}`)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }
    const handleSearch = async (e) => {
        if(value === '')
            {
                loadData()
            }
        return await axios
            .get(`https://localhost:7047/api/Products/GetSearch?searchString=${value}`)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    }

    // Пагинация
    function Items({ currentItems }) {
        return (
            <div className="row">
                {currentItems &&
                    currentItems.map((item) => (
                        <div className="col-md block">
                           <Card data={item}/>
                        </div>
                    ))}
            </div>
        );
    }
    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
   ////

    return (
        <div>
            <React.Fragment>
                <Container>
                    <Row style={{marginTop: 40}}>
                            <TextField className="search-input"
                                       id="outlined-basic"
                                       label="Поиск товара"
                                       variant="outlined"
                                       value={value}
                                       onChange={e => setValue(e.target.value)}
                            />
                             <Col><FontAwesomeIcon className="search-icon" onClick={handleSearch} icon={faMagnifyingGlass} style={{color: "#000000",}} size="2xl" /></Col>
                        <select
                            className="myselect"
                            onChange={handleSort}
                            value={sortValue}
                        >
                            <option>Сортировка</option>
                            {sortOptions.map((item, index) => (
                                <option value={item.value} key={index}>
                                    {item.title}
                                </option>
                            ))}
                        </select>
                    </Row>
                    <Row style={{marginTop: 40}}>
                        {
                            data.length === 0 ? (
                                <div className="error">
                                    <FontAwesomeIcon  icon={faXmark} size="2xl" style={{color: "red"}}/>
                                    <h1>Такого товара не найдено</h1>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <Items currentItems={currentItems} />
                                    <div style={{width: "300px", margin: "auto"}}>
                                        <ReactPaginate
                                            breakLabel="..."
                                            nextLabel={<FontAwesomeIcon icon={faChevronRight}/>}
                                            onPageChange={handlePageClick}
                                            pageRangeDisplayed={5}
                                            pageCount={pageCount}
                                            previousLabel={<FontAwesomeIcon icon={faChevronLeft}/>}
                                            renderOnZeroPageCount={null}
                                            pageClassName="page-item"
                                            pageLinkClassName="page-link"
                                            previousClassName="page-item"
                                            previousLinkClassName="page-link"
                                            nextClassName="page-item"
                                            nextLinkClassName="page-link"
                                            breakClassName="page-item"
                                            breakLinkClassName="page-link"
                                            containerClassName="pagination"
                                            activeClassName="active"
                                        />
                                    </div>
                                </div>
                            )

                        }
                    </Row>
                </Container>
            </React.Fragment>
        </div>
    );
};

export default Products;