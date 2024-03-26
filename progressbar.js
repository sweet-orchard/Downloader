const myButton = document.querySelector(".button");
const numbers = document.querySelector(".numbers");
const progressBar = document.querySelector(".progress-bar");

myButton.addEventListener("click", () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout((num) => {
            console.log(num);
            numbers.textContent = `${num}%`;
            progressBar.style.width = `${num}%`;
            if(num == 100){
                numbers.textContent = "✅ Done";
            }
        }, i * 100, i);
    }
});






