const token = 'token_here'

const fetch = require("node-fetch");
const options = {
    crop_farm: {
        farming: false,
        crop: "corn"
    },
    crypto_farm: {
        farming: true,
        crop: "dogecoin"
    },
    mine_farm: {
        farming: true,
        crop: "gold"
    },
}
var auto_sell = {
    online: true,
    cooldown: "600000"
}

function log(data) {
    var date = new Date();
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return console.log(`[${current_time}] ${data}`)
}

log(`Auto Farm started! Config:\n`)
for (const [index,val] of Object.entries(options)) {
    console.log(index,val)
}
console.log("auto_sell",auto_sell)
function cooldown(data){
    const cooldown = data == "copper" ? "130000" : data == "iron" ? "250000": data == "gold" ? "490000": data == "cotton" ? "25000": data == "wheat" ? "40000": data == "corn" ? "70000": data == "dogecoin"? "3850000": data == "litecoin"? "970000":data == "bitcoin"? "1930000":"n/a"
    return cooldown
}

function sendMessage(content) {
    fetch("https://discord.com/api/v8/channels/809138469745328168/messages", {
        "headers": {
          "accept": "*/*",
          "authorization": token,
          "content-type": "application/json",
        },
        "referrer": "https://discord.com/channels/784214413052870706/809138469745328168",
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": `{\"content\":\"${content}\"}`,
        "method": "POST",
        "mode": "cors"
    });
}

for (const [index,val] of Object.entries(options)) {
    if (val.farming) {
        const message = val.crop == "corn" ? "pick" : val.crop == "dogecoin" ? "process" : val.crop == "gold" ? "mine" : "lol"
        setInterval(() => {
            sendMessage(`;${message} ${val.crop}`);
            log(`${val.crop} collected! `)
        }, cooldown(val.crop))
    }
}

if(auto_sell.online){
    setInterval(() => {
        sendMessage(";s");
        log("Auto Sold!")
        setTimeout(() => {
            sendMessage(";workers buy gold max")
        }, 3000);
    }, auto_sell.cooldown);
}
