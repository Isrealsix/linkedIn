import './App.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	return (
		<div className="app">
			<Header />

			{/* App body */}
			<div className="app__body">
				<Sidebar />
			</div>
		</div>
	);
}

export default App;
