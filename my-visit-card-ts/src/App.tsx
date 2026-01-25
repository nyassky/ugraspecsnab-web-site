import MainPage from './components/main_page/main_page';
import Projects from './components/realized_projects/projects';

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
				<Route
					path='/about_us'
					element={<div>О нас</div>}
				/>
				<Route
					path='/projects'
					element={<Projects />}
				/>
				<Route
					path='/our_tech'
					element={<div>Собственные технологии</div>}
				/>
			</Routes>
		</BrowserRouter>
		
	);
}

export default App
