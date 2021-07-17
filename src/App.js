import React, {useState} from 'react';
import './App.css';

import { Canvas, Nav } from './components'

function App() {
	const appStyle = {
		background: 'linear-gradient(0deg, black, white, lightgrey ,grey, darkgrey 99%,black )',
		// minHeight: 'auto',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		// width: '100%'
	}
	return (
		<div className="App" style={appStyle}>
			{/* <div style={{ width: '', display: 'flex', flexDirection: 'column' }}> */}
				<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '', filter: 'drop-shadow(10px 10px 10px black)' }}>
				</div>
				<Nav/>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto' }}>
					<Canvas />
				</div>
				{/* <Generation /> */}
			{/* </div> */}
		</div>
	);
}

export default App;
