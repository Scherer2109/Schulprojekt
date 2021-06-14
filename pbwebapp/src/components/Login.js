import React, { Component } from "react";
import styled from 'styled-components/macro';



const NavbarContainer = styled.div`
  width: 30%;
  height: 180px;
  z-index: 10;
  background: #037cff;
  border-radius: 19px;
`;

const Button = styled.div`
  width: 110px;
  color: #fff;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
`;


export default class Login extends Component {
    render() {
        return (
            <NavbarContainer>
            <form>

                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>

                
            </form>
            
            </NavbarContainer>

            
        );
    }
}