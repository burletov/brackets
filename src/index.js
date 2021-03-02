module.exports = function check(str, bracketsConfig) {

    if(typeof str !== 'string'){
        return false;
    }

    let result = [],
        open = [],
        close = [],
        chars = str.split('');

    for(let i = 0; i < bracketsConfig.length; i++){
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }

    for (let i = 0; i < chars.length; i++) {
        let openIndex = open.indexOf(chars[i]);

        if (openIndex !== -1 && close.indexOf(chars[i]) === -1){
            result.push(openIndex);
            continue;

        }
        if (openIndex !== -1 && close.indexOf(chars[i]) !== -1 && result.indexOf(openIndex) === -1){
            result.push(openIndex);
            continue;

        }

        let closeIndex = close.indexOf(chars[i]);
        if (closeIndex !== -1) {
            openIndex = result.pop();
            if (closeIndex !== openIndex) {
                return false;
            }
        }
    }

    return result.length === 0;

}

