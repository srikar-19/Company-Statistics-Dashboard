import React, { useState } from 'react';
import "react-circular-progressbar/dist/styles.css";
import '../styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import AddWidget from './AddWidget';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../actions';
import Widget from './Widget';

export const handleRemoveWidget = async (selectedCategory, widgetId, dispatch) => {
    localStorage.removeItem('dashboardState');
    dispatch(removeWidget(selectedCategory.id, widgetId));

    try {
        const response = await fetch('http://localhost:5000/remove-widget', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                categoryId: selectedCategory.id,
                widgetId: widgetId,
            }),
        });

        const result = await response.json();

        if (!result.success) {
            console.error('Failed to remove widget from the server:', result.error);
        }
    } catch (error) {
        console.error('Error removing widget:', error);
    }
};


const Dashboard = ({ category, categories }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ selectedCategory, setSelectedCategory ] = useState(categories[0]);

    const handleCategory = (category) => {
        setSelectedCategory(category);
    }

    const handleCheckboxChange = (widget, isChecked) => {
        if (!isChecked) {
            const widgetItem = selectedCategory.widgets.find((item) => widget.id === item.id);
            handleRemoveWidget(selectedCategory, widgetItem.id, dispatch);
        }
    };    

    return (
        <div className=''>
            <div className='ms-5 me-5 mb-5'>
                <div className='info'>
                    <div class="btn me-2">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/recurring-appointment.png" alt="refresh-icon"></img>
                    </div>
                    <div class="btn options me-2">
                        <img className='h-75' src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt="menu-icon"></img>
                    </div>
                    <div class="dropdown me-2">
                        <img className='' src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="clock-icon"></img>
                        <span>Last 2 days</span>
                    </div>
                </div>
                <h5 className='text-left mb-5' style={{fontFamily:'sans-serif'}}><strong>{category.name}</strong></h5>
                <div className="dashboard row row-cols-1 border border-2 p-5">
                    {category.widgets.map((widget) => (
                        <Widget key={widget.id} widget={widget} category={category} onRemove={() => handleRemoveWidget(category, widget.id, dispatch)} />

                    ))}
                    <div className={`${category.widgets.length % 3 === 1 ? 'col-8' : 'col-4'}`}>
                        <button className="add-widget-btn mx-auto d-block" onClick={handleShow}><FontAwesomeIcon icon={faPlus} /> Add Widget</button>
                        <Offcanvas show={show} onHide={handleClose} placement={'end'} style={{ width: '700px' }}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Add/Remove Widgets</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <h6 style={{ fontFamily: 'sans-serif' }}>Personalize your dashboard by adding or removing the following widgets:</h6>
                                    <Navbar expand="lg" className="mt-4 bg-dark text-white bg-body-tertiary">
                                        <Container>
                                            <Nav className="me-auto">
                                                { categories.map((categoryItem) => (
                                                        categoryItem.id === 3 ? (
                                                            <Nav.Link className='me-4' key={categoryItem.id} href="" onClick={() => handleCategory(categoryItem)} 
                                                                active={selectedCategory.id === categoryItem.id} 
                                                                style={{fontSize: '14px', borderBottom: selectedCategory.id === categoryItem.id ? '2px solid purple' : 'black', color: selectedCategory.id === categoryItem.id ? 'black' : 'black'}}>
                                                                {categoryItem.name}
                                                            </Nav.Link>
                                                            ) : (
                                                                <Nav.Link className='me-4' key={categoryItem.id} href="" onClick={() => handleCategory(categoryItem)} 
                                                                    active={selectedCategory.id === categoryItem.id} 
                                                                    style={{fontSize: '14px', borderBottom: selectedCategory.id === categoryItem.id ? '2px solid purple' : 'black', color: selectedCategory.id === categoryItem.id ? 'black' : 'black'}}>
                                                                    {categoryItem.name.slice(0,5)}
                                                                </Nav.Link>
                                                            )
                                                    )
                                                )
                                                }
                                            </Nav>
                                        </Container>
                                    </Navbar>
                                <Form className='ms-4 mt-3 mb-4'>
                                    {selectedCategory.widgets.map((widget) => (
                                        <Form.Group key={widget.id}>
                                            <Form.Check
                                                className='rounded widgetList'
                                                type='checkbox'
                                                label={`${widget.name}`}
                                                defaultChecked
                                                onChange={(e) => handleCheckboxChange(widget, e.target.checked)}
                                            />
                                        </Form.Group>
                                    ))}
                                </Form>
                                <AddWidget category={category}></AddWidget>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;