import React from 'react';
import './button.scss'

const Button = ({ message = 'Hello world' }) => <button className="btn-primary">{message}</button>;
export default Button;
