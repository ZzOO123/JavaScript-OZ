// 요소 선택
const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetbutton = document.querySelector("#reset")

let lottoNumbers = []
const colors = ["orange", "skyblue", "red", "purple", "green"]
const today = new Date()

let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일`

// paintNumber 함수
function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachnum")
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.append(eachNumDiv)
}

// 추첨 버튼 클릭 이벤트 핸들링
drawButton.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1

        // 번호 중복되지 않기
        // 로또번호(rn)가 인덱스(indexOf)에 없으면(-1) push
        if(lottoNumbers.indexOf(rn) === -1){
            // 번호 리스트에 넣기
            lottoNumbers.push(rn);
            // 숫자 추첨될 때 화면에 출력 
            paintNumber(rn);
        }
    }
})

// 다시 버튼 클릭 이벤트 핸들링
resetbutton.addEventListener("click", function(){
    lottoNumbers.splice(0, 6)
    // console.log(lottoNumbers)
    numbersDiv.innerHTML = ""
})

////// 추첨 버튼을 누른 후, 다시 버튼이 아닌 추첨버튼을 또 눌러도 새롭게 번호가 추첨되도록 수정!
drawButton.addEventListener('click', function(){
    lottoNumbers.splice(0, 6)
    numbersDiv.innerHTML = ""
    while(lottoNumbers.length < 6){
        let rn = Math.floor(Math.random() * 45) + 1

        if(lottoNumbers.indexOf(rn) === -1){
            lottoNumbers.push(rn);
            paintNumber(rn);
        }
    }
})
