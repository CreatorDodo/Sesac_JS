const city = [
    '서울',
    '부산',
    '대구',
    '인천',
    '대전',
    '광주',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
];
const Gu = [
    '중구',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중랑구',
];

function generateAddress() {
    const cityIndex = Math.floor(Math.random() * city.length);
    const dongIndex = Math.floor(Math.random() * Gu.length);
    const gilLoadnumber = Math.floor(Math.random() * 100) + 1;
    const gilLoad = Math.floor(Math.random() * 2) === 0 ? '길' : '로';
    const gilLoadnumber2 = Math.floor(Math.random() * 100) + 1;
    return `${city[cityIndex]} ${Gu[dongIndex]} ${gilLoadnumber}${gilLoad} ${gilLoadnumber2}`;
}

export default generateAddress;
