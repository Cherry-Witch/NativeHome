let leftBtn = document.querySelector('.carousel__box__ui .movement .go__left');
                let rightBtn = document.querySelector('.carousel__box__ui .movement .go__right');
                let images = document.querySelectorAll('#imgsLine div');
                let imagesLine = document.getElementById('imgsLine');
                let imageWidth = imagesLine.offsetWidth;
                let imageLineWidth = imagesLine.scrollWidth;
                let imageScroll = 0;
                let imageCounter = 0;
                let lastDot = 0;

                let dots = [
                    document.getElementById('dot1'),
                    document.getElementById('dot2'),
                    document.getElementById('dot3'),
                    document.getElementById('dot4')
                ];

                leftBtn.addEventListener("click", (event) => {

                    lastDot = imageCounter;
                    imageWidth = imagesLine.offsetWidth;
                    imageLineWidth = imagesLine.scrollWidth - imageWidth;

                    if(!(imageScroll >= 0 && lastDot <= 0)) {
                        imageScroll += imageWidth;
                        imagesLine.style.transform = `translateX(${imageScroll}px)`;
                        imageCounter--;
                        dots[imageCounter].classList.add('active__dot');
                        dots[lastDot].classList.remove('active__dot');
                    } else if (lastDot <= 1) {
                        imageCounter = 3;
                        imageScroll = -imageLineWidth;
                        imagesLine.style.transform = `translateX(${imageScroll}px)`;
                        dots[imageCounter].classList.add('active__dot');
                        dots[lastDot].classList.remove('active__dot');
                    } else {
                        imageCounter = 3;
                        imageScroll = -imageLineWidth;
                        imagesLine.style.transform = `translateX(${imageScroll}px)`;
                        dots[imageCounter].classList.add('active__dot');
                        dots[lastDot].classList.remove('active__dot');
                    }

                    console.log("lastDot:" + lastDot);
                    console.log("imageWidth:" + imageWidth);
                    console.log("imageLineWidth:" + imageLineWidth);
                    console.log("imageCounter:" + imageCounter);

                })

                rightBtn.addEventListener("click", (event) => {
                    lastDot = imageCounter;
                    imageWidth = imagesLine.offsetWidth;
                    imageLineWidth = imagesLine.scrollWidth;
                    
                    if (!(imageCounter >= 3)) {
                        imageWidth = imagesLine.offsetWidth;
                        imageScroll -= imageWidth;
                        imagesLine.style.transform = `translateX(${imageScroll}px)`;
                        imageCounter++;
                        dots[imageCounter].classList.add('active__dot');
                        dots[lastDot].classList.remove('active__dot');
                    } else {
                        imageCounter = 0;
                        imageScroll = 0;
                        imagesLine.style.transform = `translateX(${imageScroll}px)`;
                        dots[imageCounter].classList.add('active__dot');
                        dots[lastDot].classList.remove('active__dot');
                    }
                })