const Review = require('./../models/reviewModel');
// const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

// Allow nested routes(Get reviews for one tour)
// let filter = {};
// if (req.params.tourId) filter = { tour: req.params.tourId };

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes(Getting tour & user IDs from urls)
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
