let form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = {
        username: form.username.value,
        password: form.password.value,
    };

    fetch('https://8000-dayanan-devsearchdjango-1atwf0ootv3.ws-eu101.gitpod.io/api/users/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('DATA:', data.access);
            if (data.access) {
                localStorage.setItem('token', data.access);
                window.location =
                    'file:///C:/Users/dayan/OneDrive/Documents/coding/practice%20projects/test/api%20frontend/projects-list.html';
            } else {
                alert('Username OR password did not work');
            }
        });
});