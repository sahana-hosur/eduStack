const regform=document.getElementById("reg_form");
const f_name=document.getElementById('first_name');
const m_name=document.getElementById("middle_name");
const l_name = document.getElementById('last_name') ;
const email=document.getElementById('email'); 
const username=document.getElementById('user_name');
const pwd=document.getElementById('pwd');
const con_pwd=document.getElementById('con_pwd');

regform.addEventListener('submit',e => {
    e.preventDefault();

    Validate();

});

const setError = (element, message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const Validate=()=>{
    const f_name_pattern=f_name.value.trim();
    const m_name_pattern=m_name.value.trim();
    const  l_name_pattern=l_name.value.trim();
    const email_pattern=email.value.trim();
    let user_pattern=username.value.trim();
    let pwd_pattern=pwd.value.trim();
    let con_pwd_pattern=con_pwd.value.trim();


    if(f_name_pattern===''){
        setError(f_name,'f_name is required');
    }else{
        setSuccess(f_name);
    }

    if(m_name_pattern===''){
        setError(m_name,'m_name is required');
    }else{
        setSuccess(m_name);
    }

    if(l_name_pattern===''){
        setError(l_name,'l_name is required');
    }else{
        setSuccess(l_name);
    }

    if(email_pattern===''){
        setError(email,'email is required');
    }else if(!isValidEmail(email_pattern)){
        setError(email,"please enter a valid email address");
    }
    else{
        setSuccess(email);
    }
    
    if(user_pattern===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }
    if(pwd_pattern===''){
        setError(pwd, "Password is required.");
    }else if(pwd_pattern.length <8){
        setError(pwd,"Password must be at least 8 character.");
    }else{
        setSuccess(pwd);
    }

    if(con_pwd_pattern===''){
        setError(con_pwd,"Password is required.");
    }else if(pwd_pattern !==con_pwd_pattern){
        setError(con_pwd, "Passwords do not match.");
    }else{
        setSuccess(con_pwd);
    }
    if (
        user_pattern !== '' &&
        f_name_pattern !== '' &&
        m_name_pattern !== '' &&
        l_name_pattern !== '' &&
        email_pattern !== '' &&
        isValidEmail(email_pattern) &&
        pwd_pattern !== '' &&
        pwd_pattern.length >= 8 &&
        con_pwd_pattern !== '' &&
        pwd_pattern === con_pwd_pattern
    ) {
        // All fields are valid, submit the form
        regform.submit();
    }
};
function checkUser(){

    jQuery.ajax({
        url: '../php/checkuser.php',
        data: 'user_name='+$('#user_name').val(),
        type: "POST",
        success:function(data){
            $("#check-user").html(data);
        },
        error:function(){}
    });
    }
    function checkEmail(){
    
    jQuery.ajax({
        url: '../php/checkEmail.php',
        data: 'email='+$('#email').val(),
        type: "POST",
        success:function(data){
            $("#check-email").html(data);
        },
        error:function(){}
    });
    }
    