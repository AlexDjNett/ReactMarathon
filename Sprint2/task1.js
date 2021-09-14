async function f() {
    let result = 'First!';
    let promise = new Promise(function ((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
    });

    result = await promise;
    console.log(result);
 }