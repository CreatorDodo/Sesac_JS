import process from 'process';
import readline from 'readline';

const ATM = (money, price) => {
    if (money < price) {
        console.log('잔액이 부족합니다.');
        return money;
    } else {
        console.log(
            `${price}원이 출금되었습니다. 현재 잔액은 ${money - price}원 입니다.`,
        );
        return money - price;
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let money = 0;

const menu = () => {
    rl.question(
        'ATM 메뉴 : \n1. 잔액 확인\n2. 입금\n3. 출금\n4. 종료\n원하는 작업을 선택하세요 : ',
        (answer) => {
            if (answer === '4') {
                console.log('ATM을 종료합니다.');
                rl.close();
            } else {
                switch (answer) {
                    case '1':
                        console.log(`현재 잔액은 ${money}원 입니다.`);
                        break;
                    case '2':
                        rl.question('입금할 금액을 입력하세요 : ', (answer) => {
                            const price = parseInt(answer, 10);
                            money += price;
                            console.log(
                                `${price}원이 입금되었습니다. 현재 잔액은 ${money}원 입니다.`,
                            );
                            menu();
                        });
                        break;
                    case '3':
                        rl.question('출금할 금액을 입력하세요 : ', (answer) => {
                            const price = parseInt(answer, 10);
                            money = ATM(money, price);
                            menu();
                        });
                        break;
                    default:
                        console.log('잘못된 입력입니다.');
                        break;
                }
                menu();
            }
        },
    );
};

menu();
