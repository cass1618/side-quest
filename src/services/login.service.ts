import axios from 'axios';

export const authenticateUser = async (username: string, password: string) => {
	try {
		const response = await axios.post('http://localhost:5000/sign_in', {
			username: username,
			password: password,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};

export const createUser = async (username: string, password: string) => {
	try {
		const response = await axios.post('http://localhost:5000/create', {
			username: username,
			password: password,
		});
		return response;
	} catch (error) {
		console.log(error);
	}
};
