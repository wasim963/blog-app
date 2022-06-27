const router = require( 'express' ).Router();
const RefreshToken = require('../model/RefreshToken');

/**
 * Get refresh token for the specific user by id
 */
 router.get( '/:id', async( req, res ) => {
    try {
        const token = await RefreshToken.findById( req.params.id );

        res.status( 201 ).json( token );
    } catch (error) {
        res.status( 500 ).json( error );
    }
} )

/**
 * Save refresh token for the user
 */
router.post( '/',   async( req, res ) => {
    try {
        const token = new RefreshToken( req.body );
        token.save();

        res.status( 201 ).json( 'refreshToken saved succesfully' );
    } catch (error) {
        res.status( 500 ).json( error );
    }
} )

module.exports = router;