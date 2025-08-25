const coverSlider = document.querySelector(".slideshow");
        const mainSlider = document.querySelector(".slideshow__main");
        const dots = document.querySelectorAll(".indicator");
        let interval;
        let mainCounter = 0;
        console.log(dots);
        function updateSliders() {
            mainSlider.style.transform = `translateX(-${mainCounter * 100}%)`
            dots.forEach((dot) => dot.classList.remove("active"));
            dots[mainCounter].classList.add("active");
        }

        function autoMoverSlider() {
            interval = setInterval(() => {
                mainCounter = (mainCounter + 1) % dots.length;
                updateSliders();
            }, 3000);
        }
        autoMoverSlider();

        dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                mainCounter = index;
                updateSliders();
            });
        });

        coverSlider.addEventListener("mouseover", () => {
            clearInterval(interval);
        });

        coverSlider.addEventListener("mouseleave", () => autoMoverSlider());