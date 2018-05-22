// let go = '',
//     fly = '2w',
//     a = 'r2',
//     kite = 'as';
//
// let array = [go,fly,a,kite];
//
// // console.log(array.toString())
// let out = '';
// console.log();
// let astring = `[go,fly,a,kite];`;
// out = eval(astring);
// console.log(out);

const Axios = require('axios');

const reddit  = Axios.create({baseURL: 'https://gateway.reddit.com/desktopapi/v1/subreddits'});
reddit.get('/litecoin?rtj=debug&redditWebClient=web2x&app=web2x-client-production&allow_over18=&dist=9&layout=classic&sort=hot').then( data => {
    console.log(data.data)
});
// "https://gateway.reddit.com/desktopapi/v1/subreddits/litecoin?rtj=debug&redditWebClient=web2x&app=web2x-client-production&allow_over18=&dist=9&layout=classic&sort=hot"