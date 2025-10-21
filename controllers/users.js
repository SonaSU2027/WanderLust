const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signUp = async (req,res) => {
    try{
         let {username, email, password} = req.body;
        const newuser = new User({email,username});
        const registeredUser = await User.register(newuser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                 next(err);
            }
            req.flash("success","Welcome to WanderLust!");
            res.redirect("/listings");
        });    
    } catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    } 
};

module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.login =  async (req, res) => {
    req.flash("success","Welcome to Wanderlust! You are logged in!");
    const redirectUrl1 = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl1);
};

module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if(err){
            next(err);
        }
        req.flash("success", "Logged Out Successfully!");
        return res.redirect("/listings");
    });
};