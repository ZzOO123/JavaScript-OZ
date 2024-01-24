const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42"
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all"
const request1 = new XMLHttpRequest()
const request2 = new XMLHttpRequest()

const header = document.getElementById("header")
const main = document.getElementById("main")
const input = document.getElementById("filter-text")
const button = document.getElementById("filter-button")
const select = document.getElementById("filter-select")
const more = document.getElementById("more")
const tothetop = document.getElementById("tothetop")
const resetBtn = document.getElementById("reset")

let currentDogs = []

function displayDogs(item){
    const dogImgDiv = document.createElement("div")
    dogImgDiv.classList.add("flex-item")
    dogImgDiv.innerHTML = `
        <img src=${item}>
    `
    main.appendChild(dogImgDiv)
}

// 웹페이지가 로드 됐을 때, 제일 처음 할 일
window.addEventListener("load", function(){

    // 강아지 사진 뿌리기
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        });
    })
    request1.send()

    // 셀렉트에 견종 정보 뿌리기
    request2.open("get", apiAllBreeds)
    request2.addEventListener("load", function(){
        // 객체의 키값만 모아서 배열로 보내준다.
        const response = JSON.parse(request2.response)
        Object.keys(response.message).forEach(function(item){
            const option = document.createElement("option")
            option.textContent = item
            option.value = item
            select.appendChild(option)
        })
    })
    request2.send()

})

button.addEventListener("click", function(){
    main.innerHTML = ""
    // 아이템 즉, 문자열로 된 견종 정보 안에 input에 쓰여진 정보가 있으면 필터링
    let filteredDogs = currentDogs.filter(function(item){
        return item.indexOf(input.value) !== -1
    })

    input.value = ""

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

select.addEventListener("change", function(){
    main.innerHTML = ""
    let filteredDogs = currentDogs.filter(function(item){
        // 빈 value로 indexOf를 하면 0을 반환 : 모든 것을 나타낸다.
        return item.indexOf(select.value) !== -1
    })

    filteredDogs.forEach(function(item){
        displayDogs(item)
    })
})

more.addEventListener("click", function(){
    request1.open("get", apiRandomDogs)
    request1.addEventListener("load", function(){
        const response = JSON.parse(request1.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        });
    })
    request1.send()
})

tothetop.addEventListener("click", function(){
    // scrollTo : 주어진 위치로 스트롤을 이동한다.
    window.scrollTo({ top : 0 })
})

/*
<과제>
- 견종 고르는 셀렉트 옆에다 버튼(button) 하나 추가
- 버튼 '리셋'이라고 씀
- 해당 버튼을 누르면 강아지 42마리의 소스 새롭게 요청
- 기존에 뿌려져 있던 강아지는 모두 사라지고, 새로운 강아지 42마리로 채워짐
*/

resetBtn.addEventListener('click', function(){
    main.innerHTML = ''
    // main을 초기화 했을 때, more와 tothetop 사라짐 방지
    main.appendChild(more) 
    main.appendChild(tothetop) 
    
    // 리셋버튼 클릭 시, 사진이 계속 추가되는 걸 방지하기 위해 생성
    const resetRequest = new XMLHttpRequest();
    resetRequest.open("get", apiRandomDogs)
    resetRequest.addEventListener("load", function(){
        const response = JSON.parse(resetRequest.response)
        response.message.forEach(function(item){
            currentDogs.push(item)
            displayDogs(item)
        });
    })
    resetRequest.send()
})