import React, { useEffect, useState, createContext } from 'react';

export const AppContext = createContext();
export default function(props) {	
	/* Websocket State */
	const [ rs, setRs ] = useState(0);
	const [ ws, setWs] = useState(null); 	
	const [ wsId, setWsId ] = useState('');	
		
	
	const [ dev, setDev ] = useState(false);
	const [ slider, setSlider ] = useState(false);  

	/* Charts Data */
	const [theme, setTheme] = useState('light');
	const dark = theme === 'dark';	
	
	/* Sentinel Data */
	const [ targets, setTargets ] = useState([]);
	const [ hitTotals, setHitTotals ] = useState(null);	
	const [ cpu, setCpu ] = useState([]);		
		
	const request = async (jwt,type,data) => {
		let payload = {
			jwt,
			type,
			data
		};
		ws.send(JSON.stringify(payload));
	}	
	
	const heartbeat = async (ws) => {
		setTimeout(
		    function() {
				//console.log(ws.readyState);
				/*  0 	CONNECTING 	Socket has been created. The connection is not yet open.
					1 	OPEN 	The connection is open and ready to communicate.
					2 	CLOSING 	The connection is in the process of closing.
					3 	CLOSED 	The connection is closed or couldn't be opened.	
				*/	
				if(rs !== ws.readyState) {	    
					setRs(ws.readyState);
					if(ws.readyState === 3) { setWs(null); setRs(0);}
			    }
			   
			    (ws.readyState !== 3) ? heartbeat(ws) : '';
			    
		    }
		    .bind(this),
		    1000
		);
	}		
	
	const configureWebsocket = async() => {
		ws.onopen = function(open_event) {	
			
			ws.onmessage = function(event) {
				console.log(event);
				let tjo = JSON.parse(event.data);
				
				switch(tjo['type']) {
					case "client-websocket-id":
						setWsId(tjo['data']);
						break;
					case "target-plot-data":
						//count included in this if needed as -> tjo['data']['count']
						setTargets(tjo['data']['targets_geo_data']);
						break;
					case "target-hit-totals":
						setHitTotals(tjo['data']);
						break;
					case "system-cpu-usage":
						console.log(tjo['data'])
						let cpuData = [];
						(tjo['data'][0] !== 0) ? cpuData.push({ label: '1 min', value: tjo['data'][0] }) : '';
						(tjo['data'][1] !== 0) ? cpuData.push({ label: '5 min', value: tjo['data'][1] }) : '';
						(tjo['data'][2] !== 0) ? cpuData.push({ label: '15 min', value: tjo['data'][2] }) : '';	
						setCpu(cpuData);
											
						break;	
					default:
						break;
				}
									
			}
			
			ws.onclose = function(close_event) {
				console.log(close_event);
			}
			
			ws.onerror = function(error_event) {
				console.log(error_event);
			}		
			
			request('noop', 'request-target-plot-data', 'noop');
			request('^vAr^','request-target-hit-totals','noop'); 
		}
	}		
	
	
	useEffect(() => {	
		if(ws === null) { setWs(new WebSocket('wss://var2.pr0con.com:1300/ws')); }
		if(ws !== null && rs === 0) { configureWebsocket(); heartbeat(ws); }
	},[ws,rs])			
	
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
			rs,
			wsId,
			request,
			
			dev,
			
			slider,
			setSlider,
			
			/* Charts */
			theme, 
			setTheme,
			dark,
			
			/* Sentinel */
			targets,
			hitTotals,
			cpu,
		}}>
			{ props.children }
		</AppContext.Provider>
	)
}