import React, {useEffect, useState} from 'react';
import './styles/AdminPage.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket, faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, TextField,
} from "@mui/material";
import {Link} from "react-router-dom";
import Modal from "../Modal/Modal";

const AdminPage = () => {
    //Отрисовка контента
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [headers, setHeaders] = useState([]);
    const loadData = async (type,url) => {
        fetch(`https://localhost:7047/api/` + type + "/" + url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Успешно загружены данные:', data);
                setData(data);
                // Обработка успешного ответа от сервера
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                // Обработка ошибки
            });
    };

    function BtnGroup() {
        return(
            <div className="w-75 btn-group" role="group">
                <Button onClick={() => setModalActive(true)} variant="contained" color="success">
                    Обновить
                </Button>
                <Button onClick={() => handleClickOpen()} variant="outlined" color="error">
                    Удалить
                </Button>
            </div>
        );
    }
    //Состояния для модалок
    const [open, setOpen] = React.useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [modalAddActive, setModalAddActive] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        pageHandle(1);
    }, [])


    function pageHandle(page) {
        setPage(page);
        switch (page) {
            case 1:
                setTitle("Товары");
                setHeaders(['Наименование', 'Стоимость', 'Короткое описание', 'Описание']);
                loadData('Products','GetAll');
                break;
        }
    }

    const [addData, setAddData] = useState({
        name: '',
        description: '',
        shortDesc: '',
        price: '',
        isActual: true,
        manufacturerId: 1,
        categoryId: 5,
    });
    function addHandle(){

    }

    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="update-modal">
                    <h3>Обновление {title}</h3>
                    {
                        headers.map((header) => (
                            <div className="update-modal__input">
                                <TextField
                                    id="outlined-number"
                                    label={header}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        ))
                    }
                    <div className="update-modal__input">
                        <Button className="update-modal__btn" variant="outlined" onClick={() => setModalActive(false)}>Отмена</Button>
                        <Button className="update-modal__btn" variant="contained" color="success">
                           Обновить
                        </Button>
                    </div>
                </div>
            </Modal>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Удалить выбранный объект " + title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Внимание! После удаления {title}, восстановить объект будет невозможно. Удалить объект {title} навсегда?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Отмена
                    </Button>
                    <Button variant="outlined" color="error">
                        Удалить
                    </Button>
                </DialogActions>
            </Dialog>

            <Modal active={modalAddActive} setActive={setModalAddActive}>
                <h4 className="mt-3 mb-3">Добавить новый элемент {title}</h4>
                {
                    headers.map((header) => (
                        <div>
                            <TextField  fullWidth={true} className="add-input" id="outlined-basic" label={header} variant="outlined" />
                            <br/>
                        </div>
                    ))
                }
                <div className="group-btn">
                    <Button onClick={() => setModalAddActive(false)} variant="outlined">Отмена</Button>
                    <Button onClick={addHandle} variant="contained" color="success">
                        Добавить
                    </Button>
                </div>
            </Modal>

            <div className="header-back">
                <h1 className="mt-5">Администраторская панель управления</h1>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <Nav>
                        <NavDropdown title="Выберите объект" id="nav-dropdown">
                            <NavDropdown.Item onClick={() => pageHandle(1)} eventKey="4.1">Товары</NavDropdown.Item>
                        </NavDropdown>
                        <FontAwesomeIcon onClick={() => setModalAddActive(true)} icon={faCirclePlus} size="xl" className="col nav-plus"/>

                    </Nav>
                    <div className="orders row">
                        <div className="row">
                            <div className="row">
                                <h2 className="mb-4 mt-5">{title}</h2>
                                <div className="row">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            {headers.map((header) => (
                                                <th>{header}</th>
                                            ))}
                                            <th style={{textAlign: "center"}}>Действия</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                page === 1 && data.map(item => (
                                                    <tr>
                                                        <td width="40%">{item.name}</td>
                                                        <td width="20%">{item.price}</td>
                                                        <td width="20%">{item.shortDesc}</td>
                                                        <td width="20%">{item.description}</td>
                                                        <td className="text-center">
                                                            <BtnGroup />
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminPage;