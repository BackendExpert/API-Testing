const form = document.getElementById('searchQuery')

form.addEventListener('submit', async function(e) {
    e.prpreventDefault()

    // get data in input feild

    const dataSearch = document.forms['FormSearch']['searchQuery'].value;

    if(dataSearch === ""){
        alert(dataSearch)
    }
})