const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');
const temp_rel_val = document.getElementById('temp_rel_val');
const temp_status = document.getElementById('temp_status')

const dataHide = document.querySelector('.data_hide');

const getInfo = async(event) => {
    event.preventDefault();
let cityval = cityname.value; 

if(cityval === ""){
    city_name.innerText = `plz write the name before search`
    dataHide.classList.add('data_hide');
}else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b1e8b5428539745bba8568658b21ef72`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}; ${arrData[0].sys.country}`;
        temp_rel_val.innerText = arrData[0].main.temp;
        const tempMod = arrData[0].weather[0].main;

        if(tempMod === "Clear"){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }else if(tempMod === "Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }else if(tempMod === "Rain"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else {
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }

        dataHide.classList.remove('data_hide');

    }catch{
        city_name.innerText = `plz write correct spelling`
        dataHide.classList.add('data_hide');
    }

}


}

submitbtn.addEventListener('click', getInfo);