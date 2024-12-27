const axios = require('axios');
const { SocksProxyAgent } = require('socks-proxy-agent');

// Указываем порт для Tor SOCKS-прокси (по умолчанию Tor использует 9050)
const agent = new SocksProxyAgent('socks5h://127.0.0.1:9050');

axios.get('https://discord.com/api/v10/users/@me', {
  headers: {
    'Authorization': `Bot MTAyODg5MTkyNTE5MDgwMzU0OA.GHFGuD.CSlpCHvkDqbdiYJh36hzoHrw3i5Rz1BJe8gjro`
},
httpsAgent: agent
})
.then(response => {
console.log(response.data);
})
.catch(error => {
console.error('Error:', error);
});