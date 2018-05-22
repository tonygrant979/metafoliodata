function has(word,inArray){
    return inArray.indexOf(word.toLowerCase()) !== -1;
}

module.exports = function MetaEden(data,reply){



    if(!has('sera',Object.keys(data.cmds))){
        data.conOut += ' || Not a Sera command.';
        console.log(data.conOut);
        return;
    }


    console.log('Sera Command!',data.cmds);

    let Commands = {
        ping: PingPong,
        help: () => {
            reply('Available commands: '
                + JSON.stringify(Object.keys(Commands)));
        },
    };

    Object.keys(Commands).forEach(c => {
        has(c,Object.keys(data.cmds)) && Commands[c]();
    });

    function PingPong(){
        reply('Ping Pong!')
    }


};