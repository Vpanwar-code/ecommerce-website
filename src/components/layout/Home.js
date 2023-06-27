import React from 'react';
import { Button, Container,Table } from 'react-bootstrap';
 
const Home=()=>{
  return (
    <>
     <h2 style={{textAlign: "center" , margin : "40px"}}>TOURS</h2>
     <Container>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>DATE</th>
          <th>CITY</th>
          <th>CONCERT NAME</th>
          <th>TICKETS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>JUL 12</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="primary">Buy Tickets</Button></td>
        </tr>
        <tr>
          <td>JUL 22</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="primary">Buy Tickets</Button></td>
        </tr>
        <tr>
          <td>JUL 29</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="primary">Buy Tickets</Button></td>
        </tr>
        
      </tbody>
    </Table>
     </Container>
    </>
  )
}
export default Home;