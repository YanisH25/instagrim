import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import Header from '../../components/Header/Header';

const theme = {
    primary: '#212121',
    secondary: '#FAFAFA',
    ternary: '#616161'
};

class Layout extends Component {
    render() {
        return (
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Header />
                </ThemeProvider>
            </BrowserRouter>
        );
    }
}

export default Layout;