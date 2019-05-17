class Carousel {
    constructor (element){
        this.element = element;

        this.images = this.element.querySelectorAll("img");
        
        this.prevButton = element.querySelector(".left-button");
        this.nextButton = element.querySelector(".right-button");

        this.index = 0;

        this.prevButton.addEventListener("click", () => {
            this.previousImage();
        })

        this.nextButton.addEventListener("click", () => {
            this.nextImage();
        })
    }
    nextImage (){
        if(this.index < this.images.length - 1){
            this.index++;
        } else {
            this.index = 0;
        }
        this.selectImage(this.index);
    }
    previousImage (){
        if(this.index > 0){
            this.index--;
        } else {
            this.index = this.images.length - 1;
        }
        this.selectImage(this.index);
    }
    selectImage(index){
        for(let i = 0; i < this.images.length; i++){
            this.images[i].setAttribute("style", "display: none;");
        }

        this.images[index].setAttribute("style", "display: block;");
    }
}

let carousel = new Carousel(document.querySelector(".carousel"));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
