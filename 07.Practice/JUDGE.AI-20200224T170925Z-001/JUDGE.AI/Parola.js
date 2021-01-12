// Парола
// Петър забравил паролата за сейфа си. Единственото, което си спомня е, че тя се получава от цяло положително шестцифрено число N по следния начин:
// Разменят се първата и шестата, втората и петата, третата и четвъртата цифри на N;
// Пресмятат се частното и остатъка при деление на новополученото число на цялото положително число K;
// Събират се получените частно и остатък.
// Направете програма, която да извежда получената по описания начин парола.
// Вход
// От стандартния вход се въвеждат целите положителни числа N и K
// ( 99999 < N < 1000000, 0 < K < 1000 ).
// Изход
// На стандартния изход програмата да изведе едно цяло число, което се получава по описания начин.
// Примери:
// Вход/Изход
// 123456 4 163581
// 996655 99 5645
const input = ['996655 99'];
const print = this.print || console.log;
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const initialInput = gets().split(' ');
const initialNum = initialInput[0];
const k = +initialInput[1];
const reversedNum = Number(initialNum.split('').reverse().join(''));
const result1 = Math.floor(reversedNum / k);
const result2 = reversedNum % k;
const finalResult = result1 + result2;
print(finalResult);