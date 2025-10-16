import Header from "./components/header/header";
import Footer from './components/footer/footer'
import './styles/global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Header />}
				/>
				<Route
					path='/'
					element={<Footer />}
				/>
				
			</Routes>
		</BrowserRouter>
		
	);
}

export default App
