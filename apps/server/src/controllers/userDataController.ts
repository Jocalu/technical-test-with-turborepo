import { Request, Response } from 'express'

const userData = {
	_id: 555555,
	docType: 'nif',
	docNum: '11223344E',
	email: 'it@parlem.com',
	customerId: '11111',
	name: 'Enriqueta',
	surname: 'Parlem',
	phone: '668668668',
	address: {
		street: 'Carrer de la Pau 1',
		zipCode: '08001',
		city: 'Barcelona',
		province: 'Barcelona',
	},
}

const userDataController = () => {
	const getUserByCustomerId = (req: Request, res: Response) => {
		try {
			return res.json(userData)
		} catch (error) {
			res.status(500).send(error)
		}
	}

	return {
		getUserByCustomerId,
	}
}

export default userDataController()