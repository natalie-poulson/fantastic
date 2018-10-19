console.log('sanity check')

setInterval( () => {
    $.ajax({
        method:'GET',
        url:'http://localhost:12345',
        success: handleSuccess = (response) => {
            console.log(response)
            const data = {
                timestamp:'',
                code:''
            }
            $.ajax({
                method:'POST',
                url:'/api',
                data: data,
                success: handleSuccess = (json) => {
                    console.log(json)
                    // INCREASE COUNT ON FRONT END TABLE 
                },
                error: handleError = (err) => {
                    console.log(err)
                }
            })
        },
        error: handleError = (err) => {
            console.log("Error:", err)
        }
    });
}, 10000 );




