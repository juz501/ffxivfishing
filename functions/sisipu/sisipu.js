exports.handler = ( event, context, callback ) => {
  let user = null;
  if ( event.httpMethod !== 'POST' ) {
    const clientContext = context.clientContext;
    if ( clientContext && clientContext.user ) {
      user = clientContext.user;
      callback( null, {
        statusCode: 200,
        body: "Hello " + user.user_metadata.full_name
      });
      return;
    }
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
      body: "Hello" + ( user !== null ? user.user_metadata.full_name : " World")
    });
  } catch (e) {
    callback( null, {
      statusCode: 200,
      body: "Hello, Fake Moogle" + e
    });
  }
}