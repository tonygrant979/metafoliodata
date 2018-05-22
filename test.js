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
    console.log();
    let high = {
        score: 0
    };
    let posts = data.data.posts;
    Object.keys(posts).forEach(pid =>{
        let post = posts[pid];
        if(post.isStickied) return;
        if(post.score > high.score) high = post;
    });
    console.log(high);
    // console.log(Date.parse(high.created));
});
// "https://gateway.reddit.com/desktopapi/v1/subreddits/litecoin?rtj=debug&redditWebClient=web2x&app=web2x-client-production&allow_over18=&dist=9&layout=classic&sort=hot"