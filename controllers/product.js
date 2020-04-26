const catchAsync = require('./../utils/catchAsync');
const Product = require('./../models/Product');
const ApiFeatures = require('./../utils/apiFeatures');

exports.createProduct = catchAsync(async (req, res, next) => {
  const doc = await Product.create(req.body);

  res.status(201).json({
    status: 'ok',
    data: {
      product: doc,
    },
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const features = new ApiFeatures(Product.find(), req.query).sort().paginate();

  const docs = await features.query;

  res.json({
    status: 'ok',
    results: docs.length,
    data: { products: docs },
  });
});
