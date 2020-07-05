exports.handler = ( event, context, callback ) => {
  if ( event.httpMethod !== 'POST' ) {
    callback( null, {
      statusCode: 200,
      body: "Hello, World"
    });
    return;
  }
  const payload = JSON.parse( event.body ).payload
  callback( null, {
    statusCode: 200,
    body: "Hello, CID: " + payload
  });
}