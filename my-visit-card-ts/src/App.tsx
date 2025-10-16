import Header from "./components/header/header";
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
					
				
			</Routes>
		</BrowserRouter>
		
	);
}

export default App
