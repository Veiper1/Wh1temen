document.getElementById('reviewForm').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Спасибо за ваш отзыв.Мы это очень ценим');
            this.reset();
        });
 let currentImage = 1;
        const totalImages = 7; 

        function showImage() {
            document.getElementById('image').src = 'image' + currentImage + '.jpg';
        }

        function nextImage() {
            currentImage = (currentImage % totalImages) + 1;
            showImage();
        }

        function prevImage() {
            currentImage = (currentImage - 2 + totalImages) % totalImages + 1;
            showImage();
        };
        let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg",]; // Массив изображений
let currentIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById("image");
    imgElement.style.opacity = 0; 
    setTimeout(() => {
        imgElement.src = images[index];
        imgElement.style.opacity = 1;
    }, 500); 
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; 
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    showImage(currentIndex);
}
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();

           document.querySelector(this.getAttribute('href')).scrollIntoView({
               behavior: 'smooth'
           });
       });
   });

    const openPopup = document.getElementById('open-popup');
    const closePopup = document.getElementById('close-popup');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    openPopup.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

   function showAlert() {
        var input = document.getElementById('input').value;
        var input = document.getElementById('input').value;
        var input = document.getElementById('input').value;
        console.log("Данные на обработке...");
    alert("Регестрация прошла успешна");

};
const openPopup1 = document.getElementById('open-popup1');
    const closePopup1 = document.getElementById('close-popup1');
    const popup1 = document.getElementById('popup1');
    const overlay1 = document.getElementById('overlay1');

    openPopup1.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closePopup1.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay1.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
function showAlert() {
        var input1 = document.getElementById('input1').value;
        var input1 = document.getElementById('input1').value;
        var input1 = document.getElementById('input1').value;
        console.log("Данные на обработке...");
    alert("Регистрация прошла успешна. ");

};
const openPopup2 = document.getElementById('open-popup2');
    const closePopup2 = document.getElementById('close-popup2');
    const popup2 = document.getElementById('popup2');
    const overlay2 = document.getElementById('overlay2');

    openPopup2.addEventListener('click', () => {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });

    closePopup2.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    overlay2.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
function showAlert() {
        var input2 = document.getElementById('input2').value;
        var input2 = document.getElementById('input2').value;
        var input2 = document.getElementById('input2').value;
        console.log("Данные на обработке...");
    alert("Регистрация прошла успешна");

};
function sendMessage() {
    const messagesDiv = document.getElementById("messages");
    const input = document.getElementById("messageInput");
    
    const messageText = input.value.trim();
    if (messageText) {
        const messageElement = document.createElement("div");
        messageElement.textContent = messageText;
        messagesDiv.appendChild(messageElement);
        input.value = "";
        
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
}
document.getElementById("playButton").addEventListener("click", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    if (videoPlayer.paused) {
        videoPlayer.play();
        this.innerText = "Приостановить видео";
    } else {
        videoPlayer.pause();
        this.innerText = "Запустить видео";
    }
});