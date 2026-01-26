import './styles/global.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
	return (
		<BrowserRouter>
			<AppRoutes/>
		</BrowserRouter>
		
	);
}

export default App
