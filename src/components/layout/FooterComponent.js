import React from  'react';
import  './FooterComponent.css';

const FooterComponent = () =>{
    return(
        <>
        <footer className='footer'>
  <div className="column link">
    <h3>Links</h3>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#blogs">Blogs</a></li>
      <li><a href="#support">Support</a></li>
    </ul>
  </div>

  <div className="column subscribe">
    <h3>Newsletter</h3>
    <div>
      <input type="email" placeholder="Your email id here" />
      <button>Subscribe</button>
    </div>
  </div>

  <div className="row copyright">
  <div className="footer-menu">

  <a href="">Home</a>
  <a href="">F.A.Q</a>
  <a href="">Cookies Policy</a>
  <a href="">Terms Of Service</a>
  <a href="">Support</a>

  </div>
   <p>Copyright &copy; 2022</p>
</div>
   
        </footer>
        
        </>
    )
}
export default FooterComponent;