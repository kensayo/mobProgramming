function sockMerchant(n, ar) {
    let uniq = [...new Set(ar)];
    let cont;
    let socks = 0;
    for(let i = 0; i < uniq.length; i++){
        cont = 0;
        for(let j = 0; j < n; j++){
            if(uniq[i] == ar[j])
                cont++;
        }
        socks += parseInt(cont/2);
    }
    return socks;
}

// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true
