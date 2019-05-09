/// create server
const express = require( 'express');
const xpress = express( );
// bcrypt
const bcrypt = require('bcrypt');

// cookie parser
const cookieParser = require( 'cookie-parser' );
xpress.use( cookieParser( ) );

// body parser
const bodyParser = require( 'body-parser' );
xpress.use( bodyParser.urlencoded( { extended : true } ) );

// view engine
xpress.set( 'view engine' , 'ejs');

const PORT = 8080;

const users = {
	'test' : { username : 'test' , password : '$2b$06$vER6ae464CdvjofWjiDXK.ParhUxBCS2fT57mWC8z4.sUL9RpBO8e' },
	'test2' : { username : 'test2' , password : '$2b$06$vER6ae464CdvjofWjiDXK.ParhUxBCS2fT57mWC8z4.sUL9RpBO8e'}
}


// routes : get/welcome , get/english , get/french
xpress.get( '/login' , ( req , res ) => {
	res.render( 'login' );
});

xpress.post( '/login' , ( req , res ) => {
	const username = req.body.username;
	const password = req.body.password;
	const user = users[ username ];
	if (  user && bcrypt.compareSync( password , user['password'] ) ) {
		res.cookie( 'username' , username );
		res.redirect( '/secret' );
	}
	else {
		res.redirect( '/login' );
	}


});

xpress.get( '/secret' , ( req , res ) => {
	const username = req.cookies['username'];
	if ( users[ username ] ) {
		res.render( 'secret' );
	}
	else {
		res.redirect( '/login' );
	}
});

xpress.get( '/logout' , ( req , res ) => {
	res.clearCookie( 'username' );
	res.redirect( '/login' );
});


// start server
xpress.listen( PORT , ( ) => {
	console.log( 'Language cookie server started on port ' , PORT );
});










