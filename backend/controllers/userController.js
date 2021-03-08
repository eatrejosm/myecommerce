import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc     Auth user & get token
//@route    POST /api/users/login
//@access   Public
const authUser = asyncHandler(async (req, res) => {
	const products = await Product.find({})

	const { email, password } = res.json(products)
})