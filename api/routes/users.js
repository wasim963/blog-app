const router = require('express').Router();
const User = require('../model/User');
const Post = require('../model/Post');
const bcrypt = require('bcrypt');

// Update User
router.put('/:id', async( req, res ) => {
    if( req.params.id === req.body.userId ) {
        try {

            if( req.body.password ) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash( req.body.password, salt );
            }

            try {
                const updatedUser = await User.findByIdAndUpdate( req.params.id, {
                    $set: req.body
                }, { new: true } )

                res.status(200).json(updatedUser);
            } catch( err ) {
                res.status(500).json(err);
            }
            res.status(200).json(user);
        } catch( err ) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json('You can update only your account!');
    }
} );

// Delete User
router.delete( '/:id', async( req, res ) => {
    if( req.params.id === req.body.userId ) {

        try {

            const user = await User.findById( req.params.id );

            try {
                await Post.deleteMany( { username: user.username } );
                await User.findByIdAndDelete( req.params.id );

                res.status(200).json("User has been deleted!");
            } catch (error) {
                res.status(500).json(error)
            }
        } catch (error) {
            res.status(500).json("User not found!");
        }

    } else {
        res.status(401).json('You can delete only your account!');
    }
} );

// Get User
router.get( '/:id', async( req, res ) => {
    try {
        
        const user = await User.findById( req.params.id );
        const { password, ...rest } = user._doc;

        res.status(200).json( rest )

    } catch (error) {
        res.status(500).json( "User Not Found!")
    }
} );

module.exports = router;