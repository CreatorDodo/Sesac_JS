try {
    let response = fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error(`HTTP 오류! status: ${response.status}`);
    }
} catch (error) {
    console.log('에러 발생:', error.message);
}
