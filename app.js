let container = document.getElementsByClassName("container")[1],
btn = document.getElementById("btn-search"),
input = document.getElementById("input-value");
let city = "karachi";


btn.addEventListener("click",async()=>{
    if(input.value){
    city = await input.value;
    input.value = "";
    city.trim();
    fetch( 'https://api.api-ninjas.com/v1/weather?city=' + city , obj)
.then(response => response.json())
.then((response) =>{
    container.innerHTML = `<div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow my-3">
        <div class="modal-body px-3 py-3">
          <h2 class="fw-bold mb-0">What's new in weather of ${city}.</h2>
          <ul class="d-grid gap-4 my-5 list-unstyled small">
            <li class="d-flex gap-4">
              <img src="https://ssl.gstatic.com/onebox/weather/64/fog.png" alt="">
              <div>
              <h5 class="mb-2">Winds</h5>
              <h6>Wind deg: ${response.wind_degrees}</h6> 
              <h6>Wind speed: ${response.wind_speed}</h6> 
              </div>
            </li>
            <li class="d-flex gap-4">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdVJREFUaN7tmc1thDAQRimBElwCJVBCSvAxR5fgEiiBEiiBErhyIx24A2cc2WhiAf4ZA1rJkZ4UZZPN9/AwHrON1rr5ZJoqUAWqQBWoAlWgxJf++WaAAGZAAdpD2dfM7zDS/yopAGE6YDoIHMLIdK8KQIAWGIAtQ8Bh/r59bQWQjCBILCkSJIF1XVuAA9Jivm9ROd0ukS0AQTtgA7SH+Vn31EoEBSAMA2YUUAHiJDyWcCtBuidIArZEroJewVEpjQSJjiIgMsMbpHdjf53sCcEWSxEYCQKOyZQhkshZBZYkYEtHeLVPQSGJnHIS0QI2/FIo+L+VILTXOUVA3BD+D3Q/pAqoFIEebUxFQQLJN/Ojo0TEqDG/JgBv1hdgeVNAP4CKPSvkCKiCQc1KSMRs2+x902hO/Z4cYFhgWOQHY8zo9hOKgCCGH71BEXcqHjEBKDft5gowypVH4YeLgKE9ZSO10cxz7z7TFJqxOEUgZxyYbPi+0M4uSRuZPYCnCPBA6TwrYCWWyFbJImo/FTMpM6pAG5CYvDO0LDii7x2JNAtdSGxuQyp41Q87UqkHW8NJzYsbw+8d6Y5Hi+7qbw8IyOIPd9HRVD8qUD8fqAJVoApUgSrwqfwCJ6xaZshM+xMAAAAASUVORK5CYII=" alt="">
              <div>
              <h5 class="mb-1">${response.temp}<sup>°C/°F</sup></h5>
              <h6>Sun Rise: ${response.sunrise} & Sunset: ${response.sunset}</h6>
              <h6>Max Temp ${response.max_temp} & Mini Temp ${response.min_temp}</h6>
              </div>
            </li>
            <li class="d-flex gap-4">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAepJREFUaN7tmd2thCAQhSnBEijBEmjgJpZgCZZgCZZgCXZwLcFX3yiBDlhIhhvC5dcdFzeB5LzsTtjz4cwwZomUknyzSANoAA2gATQANICSdZ4nA/Wk0ioGUGY7pVVJKElLXGl6NIAySMGojGh9MsCRMG80Pw5AmRozzRvppzVoGNCk068mwFYI4JPArpMSgB0BwGj5doAVutnsdDNdYwwVAH5o8rTNqzoyGsKIAqAvKETjRkNGQxC5BR8EuMm8vJCO0cKPAXBs83DyXcF9YmvKBoDHfIf5/o2DESUAM7L5HU6eez4fraFwzEwvYQo9BLDfcPrM2dek02jd1vZnOfuyEMCKaH52OwqMGaF04vBdDsQaApgQT546Jy9g/1gtcHgSqUxYQgD0xrwvgR9gn5D6WBtdEC6s6e55KQbQWd3hijqECVakxoq33okzXj03pFpiNQCOT4zfSYCf35MprUpHaBMrhltzlKwOoAx1SkJJgnqPeR3DrRhmXYZY6q8CLJaxP3NOzOzEjOSDKwigT9sxtnvM01RMTYDdMUc9AG5M/wgAnQaOsdljfnBiFlJh/QPwFK4u0C5RuMKNqQngFu7wtMJNAYhUUebE1ATYYoULAFvNwk0BmFuVZty8lFRe7S+mBtAAGkADeFsvKpKWeAy6FowAAAAASUVORK5CYII=" alt="">
              <div>
              <h5 class="mb-2">Weather feels like ${response.feels_like}<sup>°C/°F</sup></h5>
              <h6>Cloud PCT: ${response.cloud_pct}</h6> 
              </div>
            </li>
          </ul>
          <div class="social-icons ms-5 fs-3 text-dark black">
          <a class=" me-4"
              href="https://www.linkedin.com/in/muhammad-moazzam-khan-494845279/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B2%2FTc2Ax9RCmWjNM2Hc6RBg%3D%3D"><i
                  class="fa-brands fa-linkedin"></i></a>
          <a href="https://www.facebook.com/moazzam.khan.7731" class="mx-4"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://github.com/MuhammadMoazzamKhan" class="mx-4"><i class="fa-brands fa-github"></i></a>
          <a href="mailto:kmoazzamkhan1@gmail.com?" class="mx-4"><i class="fa-sharp fa-solid fa-g"></i></a>
          <a href="https://wa.me/+923456078607" class="mx-4"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
      </div>
    </div>`
})
.catch(err => console.log(err))
}
});
let obj = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/weather?city=' + city,
    headers: { 'X-Api-Key': '2tuNnQ7wGWL4CivI/rNyUg==fw7nsioNgxwUcFw0'},
    contentType: 'application/json',
};

