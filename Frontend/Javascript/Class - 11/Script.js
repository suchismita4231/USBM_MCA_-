//Synchrous code

// console.log("Start");
// console.log("middle");
// console.log("end");

function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Fetched")
        }, 1000);
    }

)}

async function getData() {
    console.log("Fetch Data..");
    const data = await fetchData();
    console.log(data);
    
}
 getData();


// //Fetch API

 const url = "https://jsonplaceholder.typicode.com/users"
// fetch(url)
//     .then((res) => res.json())
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

//FetchData()
async function fetchdata() {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchdata();