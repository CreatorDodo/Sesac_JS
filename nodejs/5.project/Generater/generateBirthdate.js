function generateBirthdate() {
    // YYYY-MM-DD 형식으로 반환
    const year = 2024 - Math.floor(Math.random() * 100);
    let month = Math.floor(Math.random() * 12) + 1;
    // 1자리수인 경우 앞에 0을 붙여줌
    if (month < 10) {
        month = `0${month}`;
    }
    const date = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month}-${date}`;
}

export default generateBirthdate;
