import url from 'url';

const Url =
    'https://docs.google.com/spreadsheets/d/11n20W9mOyr29dlzjju33f02a9U7wG7nTWzHHKQ2vvNU/edit?gid=1488741248#gid=1488741248';

// URL 파싱
const urlObj = new URL(Url);

console.log(urlObj);

// // 1. 호스트명 출력하기
// console.log(urlObj.hostname);

// // 2. 경로 출력하기
// console.log(urlObj.pathname);

// // 3. 쿼리 파라미터 출력하기
// console.log(urlObj.search);
// console.log(urlObj.searchParams);

// URL 파싱2
const parsedUrl = url.parse(Url);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.hostname);
console.log(parsedUrl.search);
console.log(parsedUrl.port);
console.log(parsedUrl.path);
console.log(parsedUrl.query);
