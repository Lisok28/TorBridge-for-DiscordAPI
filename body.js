const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');

// Указываем порт для Tor SOCKS-прокси (по умолчанию Tor использует 9050)
const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

axios.get('https://discord.com/api/v10/users/@me', {
  headers: {
    'Authorization': `Bot *тут должен быть токен бота*`
},
httpsAgent: agent
})
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error('Error:', error);
});