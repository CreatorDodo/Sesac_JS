function generatePrice() {
    // 5000원부터 9500원까지 500원 단위로 랜덤한 가격 생성
    return Math.floor(Math.random() * 11) * 500 + 4500;
}

export default generatePrice;
