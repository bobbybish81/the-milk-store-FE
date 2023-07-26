import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearchOutline, IoClose } from 'react-icons/io5';
import '../styles/Search.scss';

interface SearchProps {
  setQuery: (string:string) => void,
  setCurrentPage: (number:number) => void,
  milkTypes: string[];
}

const Search = ({ setQuery, setCurrentPage, milkTypes } : SearchProps) => {

  return (
    <>
    <Navbar>
      <Nav className='searchbar justify-content-between'>
        <InputGroup className='input-group'>
          <InputGroup.Text id='basic-addon1'>
            <IoSearchOutline/>
          </InputGroup.Text>
          <Form.Control
            placeholder='Search'
            aria-label='Search'
            aria-describedby='basic-addon1'
            onClick={() => setCurrentPage(1)}
            onChange={(e) => setQuery(e.target.value)}
            style={{borderRight: 'none'}}
          />
          <InputGroup.Text
            id='basic-addon1'
            style={{backgroundColor: '#fff'}}
            onClick={()=> window.location.reload()}>
            <IoClose style={{color: 'grey'}}/>
          </InputGroup.Text>
        </InputGroup>
        <NavDropdown className='desktop-filter' title='Filter' id='basic-nav-dropdown'>
          {milkTypes.map((type, index) => (
            <NavDropdown.Item
              key={index}
              onClick={()=> {setQuery(type); setCurrentPage(1)}}>{type}</NavDropdown.Item>
            )
          )}
        </NavDropdown>
      </Nav>
    </Navbar>
    <NavDropdown className='mobile-filter' style={{color: '#000'}} title='Filter' id='basic-nav-dropdown'>
    {milkTypes.map((type, index) => (
      <NavDropdown.Item
        key={index}
        onClick={()=> {setQuery(type); setCurrentPage(1)}}>{type}</NavDropdown.Item>
      )
    )}
  </NavDropdown>
  </>
  );
}

export default Search;

