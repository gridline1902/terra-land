import { MoralisNextApi } from "@moralisweb3/next";

const DATE = new Date();
const FUTUREDATE = new Date(DATE);
FUTUREDATE.setDate(FUTUREDATE.getDate() + 1);

const { MORALIS_API_KEY, APP_DOMAIN, NEXTAUTH_URL } = process.env;

if (!MORALIS_API_KEY || !APP_DOMAIN || !NEXTAUTH_URL) {
  throw new Error(
    "Missing env variables. Please add the required env variables."
  );
}

export default MoralisNextApi({
  apiKey: MORALIS_API_KEY,
  authentication: {
    timeout: 120,
    domain: APP_DOMAIN,
    uri: NEXTAUTH_URL,
    expirationTime: FUTUREDATE.toISOString(),
    statement: "Sign message to authenticate.",
  },
});
