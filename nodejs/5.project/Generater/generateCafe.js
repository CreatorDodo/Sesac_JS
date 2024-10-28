const cafe = [
    '스타벅스',
    '이디야',
    '바나프레소',
    '빽다방',
    '할리스',
    '탐앤탐스',
    '커피빈',
    '투썸플레이스',
    '엔제리너스',
    '커피나무',
    '커피베이',
    '파스쿠찌',
    '커피마마',
    '커피에반하다',
    '커피빈',
    '커피하우스',
];

const location = [
    '신촌',
    '홍대',
    '강남',
    '건대',
    '잠실',
    '부산',
    '대구',
    '광주',
    '대전',
    '제주',
];

function generateCafe() {
    const randomCafe = cafe[Math.floor(Math.random() * cafe.length)];
    const randomLocation =
        location[Math.floor(Math.random() * location.length)];
    const hojumNum = Math.floor(Math.random() * 10) + 1;
    const cafeFullName = `${randomCafe} ${randomLocation}${hojumNum}호점`;
    // return {} : 객체를 반환
    return {
        cafeFullName,
        randomCafe,
    };
}

export default generateCafe;
