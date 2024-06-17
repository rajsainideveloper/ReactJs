import { Link, useNavigate } from 'react-router-dom';
import React from 'react';


    
const  mainHeader = () => {   
        return (
            <>
            <header>
                    <div class="container">
                        <div class="logo">
                            <a href="#">MyLogo</a>
                        </div>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="auth-buttons">
                            <a href="#" class="btn login-btn">Login</a>
                            <a href="#" class="btn signup-btn">Sign Up</a>
                        </div>
                    </div>
                </header>
                
            </>
        );
}
export default mainHeader;