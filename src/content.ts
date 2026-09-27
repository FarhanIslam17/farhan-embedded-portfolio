/* Edit stages and projectFacts to update the story. A new project uses an existing board node and a stage position; no JSX edits needed. */
export const stages=[
{n:'00',label:'SYSTEM',at:0,title:'Farhan Islam',sub:'Electrical engineering / embedded systems / avionics',copy:'Electrical Engineering · Embedded Systems · Avionics. Scroll to enter the system.'},
{n:'01',label:'CONTROLLER',at:.13,title:'Inside the controller',sub:'CONTROL / MCU',copy:'Logic, timing and interfaces. The same questions come up in every embedded system: what is measured, what is controlled and what happens when an input is wrong?'},
{n:'02',label:'SIGNAL',at:.28,title:'Follow the signal',sub:'PIN → TRACE → CONVERSION',copy:'From a sensor input, through the analog front end, to a number the controller can use.'},
{n:'03',label:'EXPERIENCE',at:.42,title:'Avionics / instrumentation',sub:'REACTION DYNAMICS · MAY–AUG 2026',copy:'Built a 20-channel LabJack T7 / Mux80 acquisition setup: ten pressure channels and ten thermocouple channels. Worked on measurement-chain correlation between shunt tap and LabJack readings.'},
{n:'04',label:'PROJECTS',at:.56,title:'Systems with a purpose',sub:'TWO PROJECTS / ONE TEST SYSTEM',copy:'Two personal builds. One avionics measurement chain from the lab. Follow the connections between them.'},
{n:'05',label:'SKILLS',at:.78,title:'Tools on the bench',sub:'COMPONENT NETWORK',copy:'Embedded C/C++, instrumentation and DAQ, hardware test, sensors, analog electronics, MATLAB, AutoCAD. Each belongs to a problem, not a buzzword list.'},
{n:'06',label:'ABOUT',at:.86,title:'The engineer',sub:'MCMASTER UNIVERSITY',copy:'Electrical Engineering co-op student, B.Eng expected April 2028. Avionics intern at Reaction Dynamics; McMaster Rocketry Club and Solar Car Electrical – Low Voltage team.'},
{n:'07',label:'CONTACT',at:.96,title:'Back to the whole system',sub:'CONTACT / RESUME',copy:'Interested in embedded hardware, instrumentation and test. The board connects the work; the person behind it is reachable below.'},
];
export const projectFacts=[
{node:'CTRL',at:.57,type:'PERSONAL BUILD',heading:'Accessible microwave controller',body:'Dual-MCU real-time appliance controller. A control-system project focused on accessible interaction.'},
{node:'SENS',at:.655,type:'PERSONAL BUILD',heading:'Indoor 3D spatial mapping',body:'MSP432 and LiDAR room scanner. Sensing, embedded processing and a spatial representation of the room.'},
{node:'DAQ',at:.70,type:'INTERNSHIP SYSTEM',heading:'Reaction Dynamics / DAQ',body:'Internship, not a personal project: LabJack T7 / Mux80, twenty channels split between pressure and thermocouples.'},
];
export const currentProject=(progress:number)=>[...projectFacts].reverse().find(p=>progress>=p.at-.015)||projectFacts[0];
export const skillFacts=[['MCU','Embedded C/C++'],['ADC','Instrumentation / DAQ'],['SENS','Sensor interfaces'],['PWR','Analog electronics'],['TEST','Hardware validation'],['CTRL','Controls / PID'],['COMMS','Interfaces'],['DAQ','LabJack T7 / Mux80']];
