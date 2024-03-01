const apiUrl ="./travel_recommendation_api.json";
const btn = document.getElementById('btnSearch');
const eventType = "click";
function showresults(results){
    console.log(results);
}
function handleSearch(){
    const search=document.getElementById('conditionInput');
    let query = search.value.toLowerCase();
    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=> {
        results = data.filter(innerarray => {
            return innerarray.some(element => element.includes(query))
        });
        showresults(results);
    })
    .catch(error=> {
        console.error('Error fetching data');
        console.log(results);
    });
}

btn.addEventListener(eventType,handleSearch);