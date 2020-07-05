exports.handler = ( event, context, callback ) => {
  if ( event.httpMethod !== 'POST' ) {
    callback( null, {
      statusCode: 200,
      body: "Hello, World"
    });
    return;
  }
  if ( ! event.body ) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Moogle with no letters"
    });
    return;
  }
  try {
    const body = JSON.parse( event.body );
    const payload = body.payload;
    callback( null, {
      statusCode: 200,
      body: "Hello, CID: " + payload + JSON.stringify( context )
    });
  } catch (e) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Fake Moogle"
    });
  }
}