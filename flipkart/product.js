let sample_data = [
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"758",
        actualprice:"2,299"
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,329",
        actualprice:"1,799"
    },
    {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286",
        actualprice:"2,499"
    }, 
    
    
    
     {
        Brand:"Arrow",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038",
        actualprice:"2,899"
    },
    
    {
        Brand:"cleimira",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sari/t/c/h/free-designer-clemira-unstitched-original-imah25cbgxpgn2vp.jpeg?q=70",
        names:"women ethnic",
        price:"1,000",
        actualprice:"1,099",
    },
    {
        Brand:"fantasy fab",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/x/8/1/m-jashavi-pmd-fashion-original-imaggzfpyfpypm6a.jpeg?q=70",
        names:"women ethnic",
        price:"2000",
        actualprice:"2,099",
    },
    {
        Brand:"fantasy fab",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/lehenga-choli/a/9/q/free-full-sleeve-maharani-wine-01-wearsquad-original-imagbthz2juwwybz.jpeg?q=70",
        names:"women ethnic",
        price:"2,999",
        actualprice:"3,000",
    },
    {
        Brand:"cleimira",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/sari/k/d/c/free-md-wb-sat6010-6-anand-sarees-no-blouse-original-imagyfgdqzssqzxp.jpeg?q=70",
        names:"women ethnic",
        price:"3,200",
        actualprice:"3,500",
    },
    


];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

    collection.map((element)=>{

        let box = document.createElement("div");

        let innerbox = document.createElement("div")
    let price1 = document.createElement("span");
     price1.innerHTML = element.price
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice

    innerbox.append(price1, price2);
    innerbox.className = "innerbox"
  let avatar = document.createElement("img");
  avatar.src = element.img_src;
  avatar.className = "avatar"
  let brand = document.createElement("p");
  brand.innerHTML = element.Brand;
   box.append(avatar,brand,innerbox);
   document.getElementById("collection").append(box);

    })
}