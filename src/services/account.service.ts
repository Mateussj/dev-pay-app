import axios from 'axios';

class AccountService {
	newAccount() {
		console.log(`${process.env.REACT_API_URL}/account`)
		return axios.post(`${process.env.REACT_API_URL}/account`);
	}
}

export default new AccountService();
