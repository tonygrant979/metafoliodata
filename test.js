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
    let high = [];
    let posts = data.data.posts;
    Object.keys(posts).forEach(pid =>{
        let post = posts[pid];
        if(post.isStickied) return;
        if(high.length === 0 || (post.score > high[0].score)) {
            high.unshift(post);
        } else {
            high.push(post);
        }
    });
    // console.log(high[0].title);
    // console.log(high[1].title);
    // console.log(high[2].title);

    function reportTop(x){
        high.splice(0,x).forEach(p=>{
            console.log(p.score,p.created,p.title);
        })
    }

    reportTop(10);
    console.log(Date.now());
    // console.log(Date.parse(high.created));
});
// "https://gateway.reddit.com/desktopapi/v1/subreddits/litecoin?rtj=debug&redditWebClient=web2x&app=web2x-client-production&allow_over18=&dist=9&layout=classic&sort=hot"