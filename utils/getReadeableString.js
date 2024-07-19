import Web3 from "web3";

export const getReadableString = async (encryptString) => {
  try {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
      } catch (error) {
        console.error("User denied account access or error:", error);
      }
    } else {
      console.error("Cors is not installed");
    }
  } catch (error) {}
}
