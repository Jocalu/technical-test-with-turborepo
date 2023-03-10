import { Request, Response } from 'express'

export const userProducts = [
	{
		_id: 1111111,
		productName: 'FIBRA 1000 ADAMO',
		productTypeName: 'ftth',
		numeracioTerminal: 933933933,
		soldAt: '2019-01-09 14:26:17',
		customerId: '11111',
	},
	{
		_id: 2222222,
		productName: 'Línea Móvil 1',
		productTypeName: 'lm',
		numeracioTerminal: 32768376,
		soldAt: '2019-01-19 14:26:17',
		customerId: '11111',
	},
]

const userProductsController = () => {
	const getUserProductsByCustomerId = (req: Request, res: Response) => {
		try {
			const { customerId } = req.params

			if (userProducts.find((product) => product.customerId === customerId)) {
				return res.json(userProducts)
			}

			throw new Error('Products not found')
		} catch (error) {
			res.status(500)
			res.send(error)
		}
	}

	return {
		getUserProductsByCustomerId,
	}
}

export default userProductsController()
