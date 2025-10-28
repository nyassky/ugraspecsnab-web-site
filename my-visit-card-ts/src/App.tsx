import MainPage from './components/main_page/main_page';

import './styles/global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<MainPage />}
				/>		
			</Routes>
		</BrowserRouter>
		
	);
}

export default App
