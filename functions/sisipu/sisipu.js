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
  } catch (e) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Fake Moogle"
    });
    return;
  }
  callback( null, {
    statusCode: 200,
    body: "Hello, CID: " + payload
  });
}