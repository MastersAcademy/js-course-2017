let data = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : 4
    }
};

let data1 = {
    a : 1,
    b : 2,
    c : {
        d : 3,
        e : {
            f : 5
        }
    }
};

function objectLogger(data){
    let resultObj = {};

    function searchDog(data){

        for (let key in data) {

            if ( data[key] instanceof  Object){
                resultObj = {};

                searchDog(data[key]);

            } else {
                resultObj[key] = data[key];
            }
        }
    }
    searchDog(data);

    console.log(resultObj);
}

objectLogger(data);
objectLogger(data1);
