/// create server
const express = require( 'express');
const xpress = express( );
// cookie parser
const cookieParser = require( 'cookie-parser' );
xpress.use( cookieParser( ) );

// view engine
xpress.set( 'view engine' , 'ejs');

const PORT = 8080;


// routes : get/welcome , get/english , get/french
xpress.get( '/' , ( req , res ) => {
	const lang = req.cookies[ 'lang' ];

	if ( lang === 'FR' ) {
		res.redirect( '/bonjour');
	}
	else {
		res.render( 'welcome' );
	}
});

xpress.get( '/bonjour' , ( req , res ) => {
	res.render( 'bonjour' );
});

xpress.get( '/lang/EN' , ( req , res ) => {
	res.cookie( 'lang' , 'EN' );
	res.redirect( '/' );
});

// routes : get/bonjour
xpress.get( '/lang/FR' , ( req , res ) => {
	res.cookie( 'lang' , 'FR' );
	res.redirect( '/bonjour' );
});

// start server
xpress.listen( PORT , ( ) => {
	console.log( 'Language cookie server started on port ' , PORT );
});










