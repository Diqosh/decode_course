 function onSubmit(form, e) {
    e.preventDefault()

    console.log(form.elements.image.files)
    //  axios.put("/api/games", {
    //     _id: form.elements._id.value,
    //     title: form.elements.name.value,
    //     price: form.elements.price.value,
    //
    // }).then(res =>{
    //     console.log('asd')
    //
    // })
    //  location.replace('/')

     let sendData = new FormData()
     sendData.append("_id", form.elements._id.value)
     sendData.append("title", form.elements.name.value)
     sendData.append("price", form.elements.price.value)
     sendData.append("image", form.elements.image.files[0])

     axios({
         url: "/api/games",
         method: "PUT",
         headers: {
             "Content-Type": "multipart/form-data"
         },
         data: sendData
     }).then(res =>{
         location.replace('/')
     })











}