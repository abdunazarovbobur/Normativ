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


        // 2.22***************************************



     const threeDays = 3 * 24 * 60 * 60 * 1000;

    // LocalStorage orqali tugash vaqtini saqlash
    let endTime = localStorage.getItem("flashSaleEndTime");

    if (!endTime) {
      endTime = new Date().getTime() + threeDays;
      localStorage.setItem("flashSaleEndTime", endTime);
    }

    function updateTimer() {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timerInterval);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        alert("Aksiya yakunlandi!");
        localStorage.removeItem("flashSaleEndTime");
        return;
      }

      // Kun, soat, daqiqa, soniya
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // DOMga chiqarish
      document.getElementById("days").textContent = String(days).padStart(2, '0');
      document.getElementById("hours").textContent = String(hours).padStart(2, '0');
      document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
      document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Har 1 soniyada yangilab turish
    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();