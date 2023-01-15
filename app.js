// 초기 값 세팅
let count = 0;

// 숫자 값, 버튼 선언
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        
        // 버튼을 클릭할 때마다 class name을 "styles" 변수에 저장
        const styles = e.currentTarget.classList 

        // 각 버튼 클릭 시 숫자 값 변경
        if(styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        // 숫자 값 색 바꾸기
        if(count > 0) {
            value.style.color = "green";
        }

        if(count < 0) {
            value.style.color = "red";
        }

        if(count === 0) {
            value.style.color = "#222";
        }

        value.textContent = count;

    })
});
