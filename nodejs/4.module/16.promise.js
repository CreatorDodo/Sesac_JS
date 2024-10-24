// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success');
//     }, 1000);
// });

// function asyncOperation1(response, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('asyncOperation1 Complete', response);
//             resolve('response1');
//         }, 1000);
//     });
// }

// function asyncOperation2(response, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('asyncOperation2 Complete', response);
//             resolve('response2');
//         }, 1000);
//     });
// }

// // asyncOperation1()
// //     .then((response) => asyncOperation2(response))
// //     .then((response2) => asyncOperation1(response2))
// //     .then((response3) => asyncOperation2(response3))
// //     .then((response4) => console.log('Done', response4))
// //     .catch((error) => console.error('Error', error));

// async function executeOperation() {
//     try {
//         const response1 = await asyncOperation1(null);
//         const response2 = await asyncOperation2(response1);
//         const response3 = await asyncOperation1(response2);
//         const response4 = await asyncOperation2(response3);
//         console.log('Done', response4);
//     } catch (error) {
//         console.error('Error', error);
//     }
// }

// executeOperation();
