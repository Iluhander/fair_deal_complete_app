fetch('http://localhost:5000/user/authenticate?id=3',
    {mode: 'no-cors'})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });