export const getallCategory = () => {
    try {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
      return  fetch("https://grocery-18ng.onrender.com/api/blog/all-Category", requestOptions)
      .then(response => response.json())
      .then(result =>{ console.log(result)
      return result}
      )
      .catch(error => {console.log('error', error)
    throw error});
    } catch (error) {
        console.log(error)
    }
   
}



export const getallProduct = () => {
    try {
        var formdata = new FormData();
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    
      return  fetch("https://grocery-18ng.onrender.com/api/product/all-product", requestOptions)
      .then(response => response.json())
      .then(result =>{ console.log(result)
      return result}
      )
      .catch(error => {console.log('error', error)
    throw error});
    } catch (error) {
        console.log(error)
    }
   
}