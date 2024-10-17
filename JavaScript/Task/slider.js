// (여기는 트랜지션 효과 넣어서...)
// 좌우 이동시 스르륵 좌->우, 우->좌 로 트랜지션.
// 맨앞에서 prev불가, 맨뒤에서 next불가.
document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelectorAll('.slide');
    let index = 0;

    const showSlide = (index) => {
        slide.forEach((s, i) => {
            if (i === index) {
                s.classList.add('show');
            } else {
                s.classList.remove('show');
            }
        });
    };

    document.getElementById('prev').addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = 0;
        }
        showSlide(index);
    });

    document.getElementById('next').addEventListener('click', () => {
        index++;
        if (index > slide.length - 1) {
            index = slide.length - 1;
        }
        showSlide(index);
    });

    showSlide(index);
});
