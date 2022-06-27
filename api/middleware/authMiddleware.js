const jwt = require( 'jsonwebtoken' );

function authMiddleware( req, res, next ) {

    const authHeader = req.headers.auth_token;
    if( authHeader ) {
        const accessToken = authHeader.split(" ")[ 1 ];

        try {
            const user = jwt.verify( accessToken, 'mySecretKey' );
            if( user ) {
                req.user = user;
                next();
            }
        } catch (error) {
            return res.status( 403 ).json( "Token is invalid!" );
        }

    } else {
        return res.status( 401 ).json( "You are not authenticated!" );
    }
}

module.exports = authMiddleware;