import { validate } from "../../src/components/register/register.presenter"

describe('validate', () => {
    it('should return true', async () => {
        const result = await validate({
            name: 'Otavio Bernardes',
            cpf: '11111111111',
            email: 'test@gmail.com',
            password: 'password@12'
        })
        expect(result).toEqual(true)
    })
})