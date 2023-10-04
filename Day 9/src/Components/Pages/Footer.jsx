import React from "react";
import '../../Asserts/Footer.css';
const Footer=()=>{
    return(
        <footer className="footer">
            <div className="quick-links">
                <ul>
                    <li><a href="privacy">@ Privacy Policy 2023</a></li>
                </ul>
                </div>
                <div className="copyright">
                    <p>Copyright © 2023 All Rights Reserved</p>
                    <p>Connect With 
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-facebook"></i>
                    </p>
                </div>
                <div className="terms">
                    {/* <p><a href="privacy">@ Privacy Policy 2023</a></p> */}
                    <p><a href="terms">Terms & Conditions</a></p>
                </div>
         </footer>
    );
}
export default Footer;