const form = document.getElementById('searchForm');

form.addEventListener('submit', async function(e){
    e.preventDefault()

    // get value of input
    const searchData = document.forms['FormSearch']['searchQuery'].value;

    if(searchData === ""){
        alert("Enter Value")
    }
    else{
        alert(searchData)

        await fetch('https://backendexpert.github.io/VRS-System-JSON/VRSuserData.json')
        .then(res => {
            if(!res.ok){
                throw new Error ('Not work not ok')
            }
            return res.json()
        })

        .then(data => {
            // console.log(data[3].email)
            
            const result = data.find(item => item.username.toLowerCase() === searchData.toLowerCase())
        
            if(result) {
                document.getElementById('results').textContent = `Name : ${result.username}, Email : ${result.email}`
            }
            else{
                document.getElementById('results').textContent = 'Username Not Found in API'
            }
        })

        .catch(error => {
            console.error("Error fetch data", error)
        })
    }

})