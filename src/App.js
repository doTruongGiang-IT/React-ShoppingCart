import React, { Component } from 'react';
import Header from './Components/Header';
import ProductsContainer from './Containers/ProductsContainer';
import MessageContainer from './Containers/MessageContainer';
import CartContainer from './Containers/CartContainer';
import Footer from './Components/Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<main id="mainContainer">
					<div className="container">
						<ProductsContainer />
						<MessageContainer />
						<CartContainer />
					</div>
				</main>
				<Footer />
			</div>
		);
	};
}

export default App;
