function amogus() {
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]');
    formData.append('img', fileField.files[0]);

    fetch('http://localhost:5000/picture', {
            method: 'PUT',
            body: formData
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
}
