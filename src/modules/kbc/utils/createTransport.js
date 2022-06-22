export async function createTransport(
  conn,
  _roomId,
  direction,
  transportOptions
) {
  console.log(`create ${direction} transport`);

  // ask the server to create a server-side transport object and send
  // us back the info we need to create a client-side transport
  console.log("transport options", transportOptions);

  // mediasoup-client will emit a connect event when media needs to
  // start flowing for the first time. send dtlsParameters to the
  // server, then call callback() on success or errback() on failure.
}
