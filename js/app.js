const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userBirth = document.getElementById('user-birth');
const userLocation = document.getElementById('user-location');
const userTelephone = document.getElementById('user-telephone');
const userPassword = document.getElementById('user-password');

// default value
userName.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My name is`;
    document.getElementById('detail').innerText = `Mr Marcus Johansen`;
})

userEmail.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My email is`;
    document.getElementById('detail').innerText = `debra.harris@example.com`;
})

userBirth.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My Birthday is`;
    document.getElementById('detail').innerText = `1956-04-04T16`;
})

userLocation.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My Address is`;
    document.getElementById('detail').innerText = `8284 Spring St`;
})

userTelephone.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My Phone Number is`;
    document.getElementById('detail').innerText = `(586)-274-2011`;
})

userPassword.addEventListener('mouseover', function () {
    document.getElementById('info').innerText = `Hi, My Password is`;
    document.getElementById('detail').innerText = `mouse`;
})

// button start work here
const fetchget = async url => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const loadBuddy = () => {
    fetchget(`https://randomuser.me/api/`)
        .then((data) => {
            displayBuddy(data.results[0]);
        })
}

const displayBuddy = buddy => {
    // console.log(buddy)
    const card = document.getElementById('card');
    const div = document.createElement('div')
    div.classList.add('mx-auto')
    card.innerHTML = `
    <img
        src="${buddy.picture.large}"
        class="img-fluid rounded-circle w-25 mx-auto my-2 border border-2"
        alt=""
    />
    `;
    card.appendChild(div);

    getInfo(buddy);
}

const getInfo = info => {
    userName.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My name is`;
        document.getElementById('detail').innerText = `${info.name.title} ${info.name.first} ${info.name.last}`;
    })

    userEmail.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My email is`;
        document.getElementById('detail').innerText = `${info.email}`;
    })

    userBirth.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My Birthday is`;
        document.getElementById('detail').innerText = `${info.dob.date.slice(0,13)}`;
    })

    userLocation.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My Address is`;
        document.getElementById('detail').innerText = `${info.location.street.number} ${info.location.street.name}`;
    })

    userTelephone.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My Phone Number is`;
        document.getElementById('detail').innerText = `${info.phone}`;
    })

    userPassword.addEventListener('mouseover', function () {
        document.getElementById('info').innerText = `Hi, My Password is`;
        document.getElementById('detail').innerText = `${info.login.password}`;
    })
}