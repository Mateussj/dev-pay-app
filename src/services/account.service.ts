import axios from 'axios';

class AccountService {
	async newAccount(user: any): Promise<any> {
		return await axios.post(`${process.env.REACT_APP_API_URL}/account`, user);
	}
}

export default new AccountService();
