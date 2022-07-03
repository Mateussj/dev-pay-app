import accountService from "../../services/account.service";

export const handleRegister = async (
	user: {
		name: string,
		email: string,
		cpf: string,
		password: string
	}) => {
	try {
		const response = await accountService.newAccount(user)
		return response.data
	} catch (error: any) {
		return error.response.data
	}
}