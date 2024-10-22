class MathOperations {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }
}

// const sum = new MathOperations(); // 객체를 생성, 실체화(인스턴스화)
// console.log(sum.add(1, 2));

const sum = MathOperations.add(1, 2);
console.log(sum); // 3

const sub = MathOperations.subtract(1, 2);
console.log(sub); // -1
