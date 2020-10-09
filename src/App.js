import React from 'react';
import './App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavbarText,
  DropdownItem,
  Pagination, 
  PaginationItem,
  PaginationLink ,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Breadcrumb, 
  BreadcrumbItem,
  FormText ,
  Fade,
  Jumbotron,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button, 
  CardTitle, 
  CardText, 
  Row,
  Col,
  CarouselCaption
} from 'reactstrap';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
