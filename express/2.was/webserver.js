import http from 'http';
import fs from 'fs';
import path from 'path';

// 객체 distructuring
import { parse } from 'querystring';

const users = [];

http.createServer(async (req, res) => {
    // 만약 사용자가 / 를 요청하면 server3.html 파일을 읽어서 응답
    // 만약 사용자가 /about 을 요청하면 about.html 파일을 읽어서 응답
    // 만약 그 외에 나머지를 요청하면 404 Not Found 라는 문자열을 응답
    // 힌트: req.url 을 비교

    // image 파일을 요청하면, static 폴더에서 파일을 찾아서 응답

    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile('./server3.html', (err, data) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    return res.end('500 Internal Server Error');
                }
                res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8',
                });
                res.end(data);
            });
        } else if (req.url === '/users') {
            // TODO:2. 모든 사용자 출력
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
            });
            console.log('현재 사용자 목록:', users);
            res.end(JSON.stringify(users));
        } else if (req.url === '/about') {
            fs.readFile('./about.html', (err, data) => {
                if (err) {
                    res.writeHead(500, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    return res.end('500 Internal Server Error');
                }
                res.writeHead(200, {
                    'Content-Type': 'text/html; charset=utf-8',
                });
                res.end(data);
            });
        } else if (req.url.startsWith('/img/')) {
            // req.url: /img/1.png
            // req.url.startsWith('/img/') : img로 시작하는지 확인
            console.log(`이미지 파일명 추출: ${req.url}`);
            // path.basename(): 파일명 추출
            const imageName = path.basename(req.url);
            // path.join(): 경로를 합쳐줌
            const imagePath = path.join('static', imageName);

            // parse 함수를 사용하여 쿼리스트링을 객체로 변환
            // const queryString = req.url.split('?')[1];
            // const query = parse(queryString);
            // console.log('쿼리스트링:', query);
            // const imageName = query.name;
            // const imagePath = path.join('static', imageName);
            console.log(`이미지 파일 경로: ${imagePath}`);
            await fs.readFile(imagePath, (err, imageData) => {
                if (err) {
                    console.error(`이미지 파일을 읽는 중 오류 발생: ${err}`);
                    res.writeHead(404, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    return res.end('404 Not Found');
                }
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(imageData);
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found');
        }
    } else if (req.method === 'POST') {
        // curl 명령어
        // curl -X POST -d "userName=alice" http://localhost:3000/user
        // -X POST: POST 메서드로 요청
        // -H "Content-Type: application/json": 요청 헤더에 'Content-Type: application/json' 추가
        // -d "userName=alice": userName=alice 라는 데이터를 전송
        // -d '{"userName": "alice"}': JSON 형식으로 데이터를 전송
        if (req.url === '/user') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
                console.log(`데이터가 받아지는 동안의 chunk: ${chunk}`);
            });

            req.on('end', () => {
                console.log(`데이터가 모두 받아진 후: ${body}`);
                const formData = parse(body);
                console.log('받은 데이터:', formData);
                const username = formData.name;
                console.log(`사용자 이름: ${username}`);

                // TODO:1. 사용자 등록
                users.push({ name: username });
                console.log('현재 사용자 목록:', users);

                // 헤더 값 출력
                console.log('요청 헤더:', req.headers);
                res.writeHead(200, {
                    'Content-Type': 'text/plain; charset=utf-8',
                });
                res.end('데이터를 받았습니다.');
            });

            // const formData = parse(body);
            // console.log('받은 데이터:', formData);
            // const username = formData.name;
            // console.log(`사용자 이름: ${username}`);
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8',
            });
            res.end('404 Not Found');
        }
    } else if (req.method === 'DELETE') {
        // curl 을 사용하여 DELETE 요청을 보내면, 해당 사용자를 삭제
        // curl -X DELETE http://localhost:3000/user -d "userName=alice" // userName=alice 사용자 삭제

        if (req.url === '/user') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
                console.log(`데이터가 받아지는 동안의 chunk: ${chunk}`);
            });

            req.on('end', () => {
                console.log(`데이터가 모두 받아진 후: ${body}`);
                const formData = parse(body);
                console.log('받은 데이터:', formData);
                const username = formData.name;
                console.log(`삭제할 사용자 이름: ${username}`);

                // 사용자 삭제
                const index = users.findIndex((user) => user.name === username);
                if (index !== -1) {
                    // splice: 배열에서 요소를 삭제
                    // splice(시작 인덱스, 삭제할 요소 개수)
                    // splice(index, 1): index 위치의 요소 1개를 삭제
                    users.splice(index, 1);
                    console.log('사용자가 삭제되었습니다.');
                    console.log('현재 사용자 목록:', users);
                    res.writeHead(200, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    res.end('사용자가 삭제되었습니다.');
                } else {
                    res.writeHead(404, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    res.end('사용자를 찾을 수 없습니다.');
                }
            });
        }
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
