import Cloudflare from "cloudflare";

export const client = new Cloudflare({
  apiEmail: "baarryoumar@gmail.com", // This is the default and can be omitted
  apiKey: process.envCLOUDFARE_API_TOKEN, // This is the default and can be omitted
});
