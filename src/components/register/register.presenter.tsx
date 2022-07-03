import accountService from "../../services/account.service";

type User = {
	name: string,
	email: string,
	cpf: string,
	password: string
}

export const handleRegister = async (user: User) => {
	if (!await validate(user))
		return 'All fields are required!'

	try {
		const response = await accountService.newAccount(user)
		return response.data
	} catch (error: any) {
		return error.response.data
	}
}

export const validate = async (user: User): Promise<boolean> => {
	return !!user.name && !!user.email && !!user.password && !!user.cpf
}