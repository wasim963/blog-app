const jwt = require( 'jsonwebtoken' );

function authMiddleware( req, res, next ) {

    const authHeader = req.headers.auth_token;
    if( authHeader ) {
        const accessToken = authHeader.split(" ")[ 1 ];

        jwt.verify( accessToken, 'mySecretKey', ( err, user ) => {
            if( err ) {
                return res.status( 403 ).json( "Token is invalid!" );
            }
            req.user = user;

            next();
        } )

    } else {
        return res.status( 401 ).json( "You are not authenticated!" );
    }
}

module.exports = authMiddleware;