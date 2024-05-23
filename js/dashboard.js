document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('open-up').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = 'flex';
    });
    document.querySelector('.close').addEventListener("click", function() {
        document.querySelector('.bg-modal').style.display = 'none';
    })
    document.getElementById('open-img').addEventListener("click", function(){
        document.querySelector(".hello").style.display='flex';
        });
    
});
    function openPdfUploadDialog() {
      document.getElementById("pdf-upload-dialog").style.display = "block";
    }
    function closePdfUploadDialog() {
      document.getElementById("pdf-upload-dialog").style.display = "none";
    }

function send_data(imageSrc) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/clicked_image.php");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    const data = `image_src=${imageSrc}`;
    xhr.send(data);

    xhr.onload = function () {
        if (xhr.status === 200) {
            console.log("Image data sent succesfully");
        } else {
            console.error("error sending image data:", xhr.statusText);
        }
    }

}
function refresh() {
    location.href="../HTML/dashboard.html"
}
function fetchData(){
    fetch("../php/fetch.php")
      .then(response => response.json())  
      .then(data => {
        const img_usr=document.getElementById("img_usr");
        img_usr.src=data[0]["path"];
        const user=document.getElementById("user_name");
        user.textContent=data[0]["username"];
        const nickname=document.getElementById("nickname");
        nickname.textContent=data[0]["nickname"];
        const div=document.getElementById("class");
        div.textContent=data[0]["std"];
        const gender=document.getElementById("gender");
        gender.textContent=data[0]["gender"];
        const dob=document.getElementById("dob");
        dob.textContent=data[0]["dob"];
        }
    )
}
window.onload=fetchData;
