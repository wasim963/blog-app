const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require( 'jsonwebtoken' );

const authMiddleware = require( '../middleware/authMiddleware' );

// REGISTER
router.post('/register', async( req, res ) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash( req.body.password, salt );

        const newUser = new User( {
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        } )

        const user = await newUser.save();
        const accessToken = jwt.sign( { id: user.id, username: user.username }, 'mySecretKey', { expiresIn: 1000 } )


        const { password, ...rest } = user._doc;
        res.status( 201 ).json({ status: 'success', user: { accessToken, ...rest } } )
    } catch( err ) {
        res.status(500).json(err);
    }
} );

// LOGIN
router.post( '/login', async( req, res ) => {
    try {

        // Check in DB whether user exist or not
        const user = await User.findOne( { username: req.body.username } );
        !user && res.status(200).json({ status: 'error', message: 'User does not exist!' } );

        // if user exist, validate password
        const validated = await bcrypt.compare( req.body.password, user.password );
        !validated && res.status(200).json({ status: 'error', message: 'Wrong password!' });

        // if everything is Okay, create a sesson and genarate a token;
        const accessToken = jwt.sign( { id: user.id, username: user.username }, 'mySecretKey',{ expiresIn: 1000 } );

        const { password, ...rest } = user._doc;
        res.status(200).json({ status: 'success', user: { accessToken, ...rest } } )

    } catch( err ) {
        res.status(500).json(err);
    }
} );


// Logout User
router.post( '/logout', authMiddleware, async ( req, res ) => {
    try {
        return res.status( 200 ).json( { status: "success", message: 'Successfully Logged Out!' } );
    } catch (error) {
        res.status(500).json(err);
    }
}  )

module.exports = router;