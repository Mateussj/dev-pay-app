import axios from "axios";

class AuthService {
	async login(username: string, password: string) {
		return axios
			.post(process.env.REACT_APP_API_URL + "signin", {
				username,
				password
			})
			.then(response => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}

				return response.data;
			});
	}

	async logout() {
		localStorage.removeItem("user");
	}

	async register(username: string, email: string, password: string) {
		return axios.post(process.env.REACT_APP_API_URL + "signup", {
			username,
			email,
			password
		});
	}

	async getCurrentUser() {
		const userStr = localStorage.getItem("user");
		if (userStr) return JSON.parse(userStr);

		return null;
	}
}

export default new AuthService();
