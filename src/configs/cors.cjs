const ethers = require("ethers");

async function walletConnect() {
  let provider = ethers.BrowserProvider | ethers.JsonRpcProvider | null;
  let signer = ethers.JsonRpcSigner | null;

  try {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      const account = await signer.getAddress();
      return account;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
  }
}

function corsOptions() {
  walletConnect();
  return {
    origin: "http://localhost:4173", // Replace with your specific origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
  };
}

module.exports = corsOptions;
