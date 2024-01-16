function postForm(){

    event.preventDefault();

    let userId = document.querySelector("[name = 'id']").value;
    let userPwd = document.querySelector("[name = 'pwd']").value;
    let userName = document.querySelector("[name = 'name']").value;
    let userEmail = document.querySelector("[name = 'email']").value;
    let userPhone = document.querySelector("[name = 'phone']").value;
    let userGender = document.querySelector("[name = 'gender']:checked").value;
    let userBirth = document.querySelector("[name = 'birth']").value;
    let userRegion = document.querySelector("[name = 'region']").value;
    let terms = document.querySelector("[name = 'terms']").value;

    const form = 
    `id : ${userId}
    pwd : ${userPwd}
    name : ${userName}
    email : ${userEmail}
    phone : ${userPhone}
    gender : ${userGender}
    birth : ${userBirth}
    region : ${userRegion}
    terms : ${terms}`;

    console.log(form);
}