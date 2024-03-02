const newDiv = document.createElement('div');
const newDiv2 = document.createElement('div');

async function fetchData(){

    try{
        const place = document.getElementById('conditionInput').value.toLowerCase();
        const response = await fetch('./travel_recommendation_api.json');
        let area;
        newDiv.className = 'newSubDiv';
        newDiv2.className = 'newSubDiv';

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        if(place ==='beach'|| place === 'beaches')
        {
             area = data.beaches;
             let div = document.getElementById('containerb');
        newDiv.innerHTML = `<img src ="${area[0].imageUrl}">
                            <h2>${area[0].name}</h2>
                            <p>${area[0].description}</p>`;
                            div.appendChild(newDiv);
         newDiv2.innerHTML = `<img src ="${area[1].imageUrl}">
                            <h2>${area[1].name}</h2>
                            <p>${area[1].description}</p>`;
                            div.appendChild(newDiv2);
        }
        else if(place ==='countries'||place ==='country')
        {
             area = data.countries;
             console.log(data.countries);
             let div = document.getElementById('containerb');
        newDiv.innerHTML = `<img src ="${area[0].cities[0].imageUrl}">
                            <h2>${area[0].cities[0].name}</h2>
                            <p>${area[0].cities[0].description}</p>`;
                            div.appendChild(newDiv);
         newDiv2.innerHTML = `<img src ="${area[1].cities[1].imageUrl}">
         <h2>${area[1].cities[1].name}</h2>
         <p>${area[1].cities[1].description}`;
         div.append(newDiv2);
        }
        else if(place ==='temples'||place==='temple')
        {
             area = data.temples;
             let div = document.getElementById('containerb');
        newDiv.innerHTML = `<img src ="${area[0].imageUrl}">
                            <h2>${area[0].name}</h2>
                            <p>${area[0].description}`;
                            div.appendChild(newDiv);
        newDiv2.innerHTML = `<img src ="${area[1].imageUrl}">
                            <h2>${area[1].name}</h2>
                            <p>${area[1].description}`;
                            div.appendChild(newDiv2);
        }

        newDiv.style.display = 'block';
        newDiv2.style.display = 'block';

        
    }
    catch(error){
        console.error(error);
    }
}
function reset()
    {
        newDiv.style.display ='none';
        newDiv2.style.display ='none';
    }
