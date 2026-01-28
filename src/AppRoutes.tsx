import MainPage from './components/main_page/main_page';
import Projects from './components/realized_projects/projects';
import OurTech from './components/our_tech/our_tech';
import AboutUs from './components/about_us/about_us';
import { useScrollToTop } from './hooks/useScrollToTop';
import './styles/global.css'
import {Route, Routes} from 'react-router-dom';
export default function AppRoutes() {
	useScrollToTop();
	return (
		<Routes>
				<Route
					path='/'
					element={<MainPage />}
				/>	
				<Route
					path='/about_us'
					element={<AboutUs />}
				/>
				<Route
					path='/projects'
					element={<Projects />}
				/>
				<Route
					path='/our_tech'
					element={<OurTech />}
				/>
		</Routes>
	)
	
}