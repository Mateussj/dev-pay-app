import accountService from "../../services/account.service";
import { Input } from "./register.dto";

export const handleRegister = async (user: Input) => {
	try {
		const response = await accountService.newAccount(user)
		return response.data
	} catch (error: any) {
		return error.response.data
	}
}