require("dotenv").config();
const fetch = require('node-fetch')
const token = process.env.token

console.log(`Config: \nCrop: ${process.env.crop} \nMineral: ${process.env.mineral} \nCrypto: ${process.env.coin}\n `)

var crops;
var coins;
var minerals;

if(process.env.crop_farm == "true"){
    function Cropstimeout() {
        crops = setInterval(farmCrops, cooldown(process.env.crop));
    }
    console.log("Crop Farm on!")
    Cropstimeout()
    function farmCrops(){
        fetch("https://discord.com/api/v8/channels/809138469745328168/messages", {
      "headers": {
        "accept": "*/*",
        "authorization": token,
        "content-type": "application/json",
      },
      "referrer": "https://discord.com/channels/784214413052870706/809138469745328168",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": `{\"content\":\";pick ${process.env.crop}\"}`,
      "method": "POST",
      "mode": "cors"
    });
    console.log(`Collected ${process.env.crop}`)
        }
}


if(process.env.crypto_farm == "true"){
    function Cryptotimeout() {
        coins = setInterval(farmCoins, cooldown(process.env.coin));
    }
    console.log("Crypto Farm on!")
    Cryptotimeout()
    function farmCoins(){
    fetch("https://discord.com/api/v8/channels/809138469745328168/messages", {
  "headers": {
    "accept": "*/*",
    "authorization": token,
    "content-type": "application/json",
  },
  "referrer": "https://discord.com/channels/784214413052870706/809138469745328168",
  "referrerPolicy": "no-referrer-when-downgrade",
  "body": `{\"content\":\";process ${process.env.coin}\"}`,
  "method": "POST",
  "mode": "cors"
});
    console.log(`Collected ${process.env.coin}`)
    }
}

if(process.env.mine_farm == "true"){
    function Mineralstimeout() {
        minerals = setInterval(farmMine, cooldown(process.env.mineral));
    }
    console.log("Mine Farm on!")
    Mineralstimeout()
    function farmMine(){
        fetch("https://discord.com/api/v8/channels/809138469745328168/messages", {
      "headers": {
        "accept": "*/*",
        "authorization": token,
        "content-type": "application/json",
      },
      "referrer": "https://discord.com/channels/784214413052870706/809138469745328168",
      "referrerPolicy": "no-referrer-when-downgrade",
      "body": `{\"content\":\";mine ${process.env.mineral}\"}`,
      "method": "POST",
      "mode": "cors"
    });
    console.log(`Collected ${process.env.mineral}`)
        }
}

function cooldown(data){
  // so yes this is messy and you know what fuck you :)
  if(data == "copper") return "130000"
  if(data == "iron") return "250000"
  if(data == "gold") return "490000"

  if(data == "cotton") return "25000"
  if(data == "wheat") return "40000"
  if(data == "corn") return "70000"

  if(data == "dogecoin") return "3850000"
  if(data == "litecoin") return "970000"
  if(data == "bitcoin") return "1930000"
}