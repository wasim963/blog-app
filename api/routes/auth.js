const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require( 'jsonwebtoken' );
const dotenv = require('dotenv');

const RefreshToken = require('../model/RefreshToken');
const authMiddleware = require( '../middleware/authMiddleware' );

dotenv.config();

// Function Generates accessToken
const getAccessToken = async ( id, username ) => {
    try {
        const token = jwt.sign( { 
            id,
            username
        }, process.env.SECRET_KEY, { expiresIn: '5m' } )
        
        return token;
    } catch (error) {
        console.log( error );
    }
}

const getRefreshToken = async ( id, username ) => {

    try {
        const token = jwt.sign( { 
            id,
            username
        }, process.env.REFRESH_KEY, { expiresIn: '15m' } );

        return token;
    } catch (error) {
        console.log(error)
    }
}

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
        const accessToken = getAccessToken( user.id, user.username );
        const refreshToken = getRefreshToken( user.id, user.username );

        const { password, ...rest } = user._doc;
        res.status( 201 ).json({ status: 'success', user: { accessToken, refreshToken, ...rest } } )
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

        // if everything is Okay, create a sesson and genarate an access token and a refresh token;
        const accessToken = await getAccessToken( user.id, user.username );
        const refreshToken = await  getRefreshToken( user.id, user.username );

        const newRefreshToken = new RefreshToken( {
            title: refreshToken,
            userId: user._id
        } );
        try {
            await newRefreshToken.save();
        } catch (error) {
            return res.status( 200 ).json( { status: 'error', message: "Something went wrong!!¯ßs̄!" } )
        }

        const { password, ...rest } = user._doc;
        res.status(200).json({ status: 'success', user: { accessToken, refreshToken, ...rest } } )

    } catch( err ) {
        res.status(500).json(err);
    }
} );


// Logout User
router.post( '/logout/:id', authMiddleware, async ( req, res ) => {
    try {
        const token = await RefreshToken.findOneAndDelete( { userId: req.params.id } )
        return res.status( 200 ).json( { status: "success", message: 'Successfully Logged Out!' } );
    } catch (error) {
        res.status(500).json(err);
    }
}  )

module.exports = router;