import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/';
import './AddTask.css';


const AddTask: React.FC = () => {
	const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));


	const handleChange = (newValue: any) => {
		setValue(newValue);
	};

	return (
		<div className="main_input">

			<TextField fullWidth label="Add Task" id="fullWidth" />
			<div className="addTask">
				{/* <TextField id="outlined-basic" label="New task" variant="outlined" /> */}
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker
						label="Date&Time picker"
						value={value}
						onChange={handleChange}
						
					/>
				</LocalizationProvider>
				<Button variant="contained">Add</Button>
			</div>
		</div>
	);
};

export default AddTask;
