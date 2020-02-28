const OktaJwtVerifier = require("@okta/jwt-verifier");
import { domain, clientId } from './config';

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId,
  issuer: `https://${domain}/`
});

module.exports = async function oktaAuth(req, res, next) {
  try {
    const token = req.token;
    if (!token) {
      return res.status(401).send("Not Authorized");
    }
    await oktaJwtVerifier.verifyAccessToken(token, "api://default");
    next();
  } catch (err) {
    return res.status(401).send(err.message);
  }
};
