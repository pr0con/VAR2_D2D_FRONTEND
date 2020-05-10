import React, { useEffect, useState, createContext } from 'react';

export const AppContext = createContext();
export default function(props) {	
	const [ dev, setDev ] = useState(false);
	const [ slider, setSlider ] = useState(false);  

	/* Charts Data */
	const [theme, setTheme] = useState('light');
	const dark = theme === 'dark';	
	
	

	const handleKeyEvent = async(event) => {
		if(event.type == "keyup") {
			switch(event.key) {
				case 'Escape':
					console.log('Escape hit...', dev);
					setDev(!dev);
					break;
				default:
					break;
			}
		}
		else if(event.type == "keydown") {
			switch(event.key) {
				
				default:
					break;
			}
		}
	}

	useEffect(() => {
		window.addEventListener("keyup", handleKeyEvent);
		window.addEventListener("keydown", handleKeyEvent);
		
		return  () => {
			window.removeEventListener("keyup", handleKeyEvent);
			window.removeEventListener("keydown", handleKeyEvent);
		}
	},[handleKeyEvent])

	return(
		<AppContext.Provider value={{
			dev,
			
			slider,
			setSlider,
			
			/* Charts */
			theme, 
			setTheme,
			dark,
		}}>
			{ props.children }
		</AppContext.Provider>
	)
}