const getCartData=async()=>{
  const userId = localStorage.getItem('userId');
  if(userId !== null){
      try{
          const formData = new FormData();
          formData.append('userId', userId);
          const res = await fetch('//localhost:8080/cart', {
              method:'POST',
              headers:{
                  "Authorization": localStorage.getItem('authToken')
              },
              body:formData
          });
          const data = await res.json();
          return data.cart;
      }
      catch(err){
          console.log(err);
      }
  }
}
const removeFromCart=async(prodId)=>{
    const userId = localStorage.getItem('userId');
    const formData = new FormData();
    formData.append('prodId', prodId);
    formData.append('userId', userId);
    try{
        const res = await fetch('//localhost:8080/cart', {
            method:'DELETE',
            headers:{
                "Authorization": localStorage.getItem('authToken')
            },
            body:formData
        });
        if(res.status === 200){
            return true;
        }else{
            return false
        }
    }catch(err){
        console.log(err);
    }
}
const addToCart=async(prodId)=>{
    const formData = new FormData();
    formData.append('userId', localStorage.getItem('userId'));
    formData.append('qty', 1);
    formData.append('prodId', prodId);
    const res = await fetch('http://localhost:8080/add-to-cart', {
        headers:{
            "Authorization": localStorage.getItem('authToken')
        },
        method:'POST',
        body:formData
    });
    if(res.status === 200){
        return true;
    }else{
        return false;
    }
}

export {
    getCartData,
    removeFromCart,
    addToCart
}