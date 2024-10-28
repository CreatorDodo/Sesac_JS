const firstNames = ['박', '이', '김', '최', '정', '한', '지', '임', '조', '윤'];
const lastNames = [
    '민준',
    '서준',
    '예준',
    '도윤',
    '시우',
    '주원',
    '하준',
    '지호',
    '지후',
    '준우',
];

function generateNames() {
    return (
        firstNames[Math.floor(Math.random() * firstNames.length)] +
        lastNames[Math.floor(Math.random() * lastNames.length)]
    );
}

export default generateNames;
