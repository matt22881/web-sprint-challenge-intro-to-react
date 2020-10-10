import React, { useState, Component } from 'react';
import './App.css';
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
  ButtonGroup, ButtonDropdown,
  Card,
    IsOpen, 
  CardTitle, 
  CardText, 
  Row,
  Col,
  CarouselCaption
} from 'reactstrap';


// class App extends Component {

const App = () => {

//   const [ myState, setMyState ] = useState(null) 
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


//   const [dropdownOpen, setOpen] = useState(false);

//   const toggle = () => setOpen(!dropdownOpen);

//   const Example = (props) => {

  return (
    <div className="App">
      <div className='full'>
        <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">top p</p>
            <hr className="my-2" />
            <p>another p</p>
            <p className="lead">
            <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>

    
            <div className='left-side'>
               
            </div>
            
            <div className='right-side'>

            </div>
        </div>
    


      







      


    </div>
  );
}


export default App;