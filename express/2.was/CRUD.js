import http from 'http';
import { promises as fs } from 'fs';
import path from 'path';

const users = [];

http.createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.method === 'GET') {
        handleGetRequest(req, res);
    } else if (req.method === 'POST') {
        handlePostRequest(req, res);
    } else if (req.method === 'PUT') {
        handlePutRequest(req, res);
    } else if (req.method === 'DELETE') {
        handleDeleteRequest(req, res);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        return res.end('404 Not Found');
    }
}).listen(8080, () => {
    console.log(`8080번 포트에서 서버 대기중`);
});

const handleGetRequest = async (req, res) => {
    try {
        if (req.url === '/') {
            const data = await fs.readFile('./index.html');
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
            });
            res.end(data);
        } else if (req.url === '/users') {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
            });
            res.end(JSON.stringify(users));
        } else if (req.url === '/about') {
            // res.end('GET 요청: /about');
            const data = await fs.readFile('./about.html');
            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8',
            });
            res.end(data);
        } else if (req.url.startsWith('/img/')) {
            // res.end('GET 요청: /img');
            const imageName = path.basename(req.url);
            const imagePath = path.join('static', imageName);
            const data = await fs.readFile(imagePath);
            res.writeHead(200, {
                'Content-Type': 'image/png',
            });
            res.end(data);
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8',
            });
            res.end('404 Not Found');
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        res.end('500 Internal Server Error');
    }
};

const handlePostRequest = async (req, res) => {
    if (req.url === '/users') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', async () => {
            try {
                const parsedData = JSON.parse(body);
                parsedData.id = Date.now().toString(); // 임시 id
                users.push(parsedData);
                // // stringify(obj, replacer, space)
                // // obj: JSON 문자열로 변환할 객체
                // // replacer: JSON 문자열로 변환할 때 사용할 함수 또는 배열
                // // space: 들여쓰기를 위한 공백 문자열
                // await fs.writeFile(
                //     './users.json',
                //     JSON.stringify(users, null, 2),
                // );
                res.writeHead(200, {
                    'Content-Type': 'application/json; charset=utf-8',
                });
                res.end(JSON.stringify(parsedData));
            } catch (err) {
                console.error(err);
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8',
                });
                res.end('500 Internal Server Error');
            }
            // // 데이터가 모두 전송된 후에 실행
            // if (req.headers['content-type'] === 'text/plain') {
            //     return res.end('text/plain 요청');
            // } else if (req.headers['content-type'] === 'application/json') {
            //     // JSON.parse(): JSON 문자열을 객체로 변환
            //     const parsedData = JSON.parse(body);
            //     // JSON.stringify(): 객체를 JSON 문자열로 변환
            //     // return res.end(`POST 요청: ${JSON.stringify(parsedData)}`);
            //     return res.end(`POST 요청: ${parsedData.name}`);
            // } else {
            //     res.writeHead(404, {
            //         'Content-Type': 'text/plain; charset=utf-8',
            //     });
            //     return res.end('/users 404 Not Found');
            // }
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        return res.end('404 Not Found');
    }

    // return res.end('POST 요청');
};

const handlePutRequest = async (req, res) => {
    if (req.url.startsWith('/users/')) {
        const id = req.url.split('/').pop();
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', async () => {
            try {
                const parsedData = JSON.parse(body);
                const userIndex = users.findIndex((user) => user.id === id);
                if (userIndex !== -1) {
                    // { ...users[userIndex], ...parsedData } : users[userIndex] 객체를 복사한 뒤 parsedData 객체를 덮어씀
                    users[userIndex] = { ...users[userIndex], ...parsedData };
                    res.writeHead(200, {
                        'Content-Type': 'application/json; charset=utf-8',
                    });
                    console.log(users[userIndex]);
                    res.end(JSON.stringify(parsedData));
                } else {
                    res.writeHead(404, {
                        'Content-Type': 'text/plain; charset=utf-8',
                    });
                    res.end('User not found');
                }
            } catch (err) {
                console.error(err);
                res.writeHead(500, {
                    'Content-Type': 'text/plain; charset=utf-8',
                });
                res.end('500 Internal Server Error');
            }
        });
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        res.end('404 Not Found');
    }
};

const handleDeleteRequest = async (req, res) => {
    if (req.url.startsWith('/users/')) {
        const id = req.url.split('/').pop();
        const userIndex = users.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            console.log(users);
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
            });
            res.end(JSON.stringify({ message: 'User deleted' }));
        } else {
            res.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8',
            });
            res.end('User not found');
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8',
        });
        res.end('404 Not Found');
    }
};
