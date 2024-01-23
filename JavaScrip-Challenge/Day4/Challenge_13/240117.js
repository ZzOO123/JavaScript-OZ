/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 */

/*  문제 출제
 *
 *   ☘️당신의 운을 시험해 보세요☘️
 * - n은 내가 정하는 수 1~9까지의 숫자만 넣어주세요.
 * - 1~9번 중 랜덤으로 행운의 숫자를 출력합니다.
 * - 콘솔에 1~10회차의 각 행운의 숫자를 비교해 당첨 여부를 표시합니다. ex) 1회차 행운의 숫자 : 2 당첨!
 * - 총 당첨 횟수와 배팅금액을 곱해주세요.
 * - 최종 금액을 콘솔에 표시해주세요. ex) 당첨금은 30000원 입니다.
 *
 *  *❗️ 제한 조건 ❗️
 * - 랜덤 숫자는 정수 입니다.
 * 
 * Math 패키지를 이용하시면 됩니다.
 * m = 10000 (당첨금)
 * 두번 당첨 되었다면 result = 20000
 * 
 */

function question(n, m) {
    // 여기에서 코드 작성해주세요!
    const min = 1;
    const max = 9;
    const winning = 1000;
    const maxAttemps = 10;

    let result = 0;
    let winCount = 0;

    for(let i = 1; i <= maxAttemps; i++){
        const random = Math.floor(Math.random() * max ) + 1;

        if(random === n){
            console.log(`${i}회차 🍀행운의 숫자🍀 : ${random} 당첨!`);
            winCount++;
            result += winCount * winning;
        }else{
            console.log(`${i}회차 🍀행운의 숫자🍀 : ${random} 낙첨...`);
        }
    }
    console.log(`10회 중 총 ${winCount}회 당첨되셨습니다.`)
    console.log(`총 당첨금은 ${result}원 입니다.`);

    return result;
}

question(4, 10000);