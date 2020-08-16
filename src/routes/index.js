import React from "react";
import {
	Route,
	Switch,
	BrowserRouter
} from "react-router-dom";
import About from "../containers/About/About";
import NotFound from '../components/NotFound';
import EditAddressForm from '../containers/EditAddress/EditAddressForm';
import EditCargoForm from '../containers/EditCargo/EditCargoForm';
import CargoForm from '../containers/CargoForm/CargoForm'

function App() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={CargoForm} />
			<Route exact path="/edit-address-form" component={EditAddressForm} />
			<Route exact path="/edit-cargo-form" component={EditCargoForm} />
			<Route exact path="/about-us" component={About} />
		</BrowserRouter>
	)
}
export default App