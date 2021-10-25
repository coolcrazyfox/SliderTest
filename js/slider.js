function Slider(){
    this.imagesUrls= [];
    this.currentImageIndex= 0;
    this.showPrevBtn= null;
    this.showNextBtn= null;
    this.slideImage= null
    this.start= function(elId){
        var that = this;
        var elSelector = "#" + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector(".show-prev-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        // subscribe to events
        this.showPrevBtn.addEventListener("click", function(e){
            that.onShowPrevBtnClick(e);
        });
        this.showNextBtn.addEventListener("click", function(e){
            that.onShowNextBtnClick(e);
        });

        // creat images array

        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu73kEsAh7uMp2MYVkpVc3cNJJX2CvBv_vCA&usqp=CAU"); 
        this.imagesUrls.push("https://gamedata.britishcouncil.org/sites/default/files/attachment/number-2_1.jpg"); 
        this.imagesUrls.push("https://m.media-amazon.com/images/I/61bMrSmWYRL._AC_SL1500_.jpg"); 
        this.imagesUrls.push("https://cdn.pixabay.com/photo/2016/02/08/12/25/number-1186417_1280.png"); 
        this.imagesUrls.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSYLq9UWkr0p8ZRAMG-_xL7nqBujTk6w9ZQ&usqp=CAU");


        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };
    this.onShowPrevBtnClick= function(e){
        this.currentImageIndex--;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;
        //disable prev button if need
        if (this.currentImageIndex ===0){
            this.showPrevBtn.disabled = true;
        }
    };
    this.onShowNextBtnClick= function(e){
        this.currentImageIndex++;    
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;
        //disable next button if need
        if (this.currentImageIndex ===(this.imagesUrls.length-1)){
            this.showNextBtn.disabled = true;
        }
    };
}

