import React, { Component } from "react";
import styled from 'styled-components';

const Button1 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 100px;
  height: 25px;
  line-height: 71px;
  font-size: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #007cff;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const Button2 = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 100px;
  height: 25px;
  line-height: 71px;
  font-size: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background: #007cff;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
`;

const SearchWrap = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button1 type="submit" className="btn btn-primary btn-block">Registrieren</Button1>


                <p className="forgot-password text-right">

                    Hast du schon ein Konto?

            <Button2 href='Login' target='Login'>
                Log dich ein!
            </Button2>
                </p>
            </form>
        );
    }
}