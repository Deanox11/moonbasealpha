async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
        try {
            // Request wallet access
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const accounts = await window.ethereum.request({ method: "eth_accounts" });
            alert("Connected Wallet: " + accounts[0]);
        } catch (err) {
            console.error("User denied wallet connection", err);
        }
    } else {
        alert("Please install MetaMask!");
    }
}
