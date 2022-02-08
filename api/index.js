const express = require( 'express' );
const dotenv = require( 'dotenv' );
const mongoose = require( 'mongoose' );
const authRoute = require( './routes/auth' );
const usersRoute = require( './routes/users' );
const postsRoute = require( './routes/posts' );
const categoriesRoute = require( './routes/categories' );
const multer = require( 'multer' );

const app = express();

dotenv.config();

mongoose.connect( process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} ).then( () => { console.log( 'Connected to MongoDB' ) } )
   .catch( err => console.log( err ) );

app.use( express.json() );

const storage = multer.diskStorage( {
    destination: ( req, file, cb ) => {
        cb( null, 'uploads' );
    },
    filename: ( req, file, cb ) => {
        cb( null, "myImage.jpeg" )
    },
    // filename: ( req, file, cb ) => {
    //     cb( null, req.body.name )
    // }
} )

const upload = multer( { storage: storage } );
app.post('/api/upload', upload.single('file'), ( req, res ) => {
    res.status( 200 ).json( "File has been uploaded!" );
} );

app.use( '/api/auth', authRoute );
app.use( '/api/users', usersRoute );
app.use( '/api/posts', postsRoute );
app.use( '/api/categories', categoriesRoute );

app.listen( 5000, () => {
    console.log( "Server Running on port 5000..." );
} );