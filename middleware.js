const Listing = require("./models/listing");
const Review = require("./models/review");

const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");

module.exports.isLoggedin = (req, res, next) => { 
    if(!req.isAuthenticated()) {
        //part of redirect url
        req.session.redirectUrl = req.originalUrl;
        //
        req.flash("error", "You must be logged in to create listing!");
        return res.redirect("/login");
    }
    next();
}

// middleware to store the redirected path in req.local
module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};
    
// To check whether the owner who created the post is same as logged in
module.exports.isOwner =async (req, res, next) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.curUser._id)){
        req.flash("error", "You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

//this is a convertion of joi
module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(".");
        throw new ExpressError(400,errMsg);
    } else {
        next();
    }
};

//this is a server side validation for review
module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(".");
        throw new ExpressError(400,errMsg);
    } else {
        next();
    }
};

module.exports.isReviewAuthor =async (req, res, next) => {
    let {id, reviewId} = req.params;
    const review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.curUser._id)){
        req.flash("error", "You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}