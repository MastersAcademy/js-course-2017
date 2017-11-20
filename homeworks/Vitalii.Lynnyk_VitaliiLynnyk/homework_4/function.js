function findLetters(str){
    let res = [];
    let numbA = 0;
    let numbM = 0;
    for(let i = 0 ; i < str.length ; i++){
        numbA = 0;
        numbM = 0;
        for(let y = 0 ; y < str[i].length ; y++){
            str[i] = str[i].toLowerCase();
            if(str[i].charAt(y) == "a"){
                numbA++;
            }else if (str[i].charAt(y) == "m"){
                numbM++;
            }
        }
        if((numbA == numbM) || ((numbA == 0) && (numbM == 0))){
            res[i] = 1;
        }else{
            res[i] = 0;
        }
    }
    console.log(res);
}
let string = ["dsgsgsd","lover mA cse","sddMaa"];
findLetters(string);
