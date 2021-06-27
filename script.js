const btn = document.querySelector('.btn-toggle');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');  
})


class Mobile{
    constructor(brandname,osName,price,color,ram,rom){
        this.brandname=brandname;
        this.osName=osName;
        this.price=price;
        this.color=color;
        this.ram=ram;
        this.rom=rom;
    }

    checkMobile() {
        return `Brand Name : ${this.brandname} and Price ${this.price}`
    }

    static availableOsMobiles(){
      console.log('android','ios')
    }

    MobileDetails(){
      console.log(this);
    }

  }

  const android=new Mobile('Redmi','Android',12000,'red',6,128);

console.log(android.checkMobile());

//non-static method
android.MobileDetails();


//static method can be use with class name 

Mobile.availableOsMobiles();