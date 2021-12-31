async function get(url) {

    const settings = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetchResponse = await fetch(url, settings);
    const data = await fetchResponse.json();
    return data; 
    
}

async function post(url, data) {

    var settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    };
    await fetch(url, settings)
        .then(response => {
            response.json()
                .then(msg => {
                    return msg
                })
        })
}