const router = require('express').Router();
const User = require('../model/User');
const Post = require('../model/Post');

// Create Post
router.post('/', async( req, res ) => {
    try {
        const newPost = new Post( req.body );
        const post = await newPost.save();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
} );

// Update Post
router.put( '/:id', async( req, res ) => {
    
    try {
        const post = await Post.findById( req.params.id );
        if( post.username === req.body.username ) {

            try {
               const updatedPost = await Post.findByIdAndUpdate( req.params.id, {
                   $set: req.body
               }, { new: true } );

               res.status( 200 ).json( updatedPost );
            } catch ( err ) {
                res.status( 500 ).json( err );
            }

        } else {
            res.status(401).json( "You can update only your posts!" );
        }
    } catch ( err ) {
        res.status( 500 ).json( err );
    }

} );

// Delete Post
router.delete( '/:id', async( req, res ) => {

    try {
        const post = await Post.findById( req.params.id );
        if( post.username === req.body.username ) {

            try {

               await Post.findByIdAndDelete( req.params.id );
               res.status( 200 ).json( "Post has been deleted!" );
            } catch ( err ) {
                res.status( 500 ).json( err );
            }

        } else {
            res.status(401).json( "You can delete only your posts!" );
        }
    } catch ( err ) {
        res.status( 500 ).json( err );
    }

} );

// GET POST
router.get('/:id', async( req, res ) => {
    try {
        const post = await Post.findById( req.params.id );

        res.status( 200 ).json( post )
    } catch (err) {
        res.status(500).json(err)
    }
} )

// Get Posts
router.get( '/', async( req, res ) => {

    const user = req.query.user;
    const catName = req.query.cat;
    try {
        let posts = [];
        if( user ) {
            posts = await Post.find({ username: user });
        } else if( catName ) {
            posts = await Post.find( { categories: {
                $in: [ catName ]
            } } )
        } else {
            posts = await Post.find();
        }

        res.status( 200 ).json( posts )
    } catch (err) {
        res.status(500).json( err );
    }
} );


module.exports = router;