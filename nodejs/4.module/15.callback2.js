function asyncOperation(response, callback) {
    setTimeout(() => {
        console.log('asyncOperation1 Complete', response);
        callback('response1');
    }, 1000);
}

function asyncOperation2(response, callback) {
    setTimeout(() => {
        console.log('asyncOperation2 Complete', response);
        callback('response2');
    }, 1000);
}

asyncOperation(null, (response) => {
    asyncOperation2(response, (response2) => {
        asyncOperation(response2, (response3) => {
            asyncOperation2(response3, (response4) => {
                console.log('Done', response4);
            });
        });
    });
});
