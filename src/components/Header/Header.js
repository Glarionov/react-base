import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import HeaderLink from "./HeaderLink";
import menuItemsArray from "./MenuItemsArray";

export default function Header() {
    return (
        <header className="bd-example">
            <Router>
                <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {Object.entries(menuItemsArray).map(
                            ([menuItemKey, menuItem]) =>
                                (
                                    <HeaderLink key={menuItemKey} {...menuItem}/>
                                ))
                        }
                        {/*<Form className="d-flex">*/}
                        {/*    <FormControl*/}
                        {/*        type="search"*/}
                        {/*        placeholder="Search"*/}
                        {/*        className="me-2"*/}
                        {/*        aria-label="Search"*/}
                        {/*    />*/}
                        {/*    <Button variant="outline-success">Search</Button>*/}
                        {/*</Form>*/}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </Router>
        </header>
    );
}
