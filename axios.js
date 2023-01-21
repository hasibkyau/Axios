//to install Axios run: npm install axios

import axios from 'axios';    
axios.get("https://dht-11-7fe63-default-rtdb.firebaseio.com/Location.json")
        .then(response => {
            conslol.log(response.data);
            localStorage.setItem("Data", JSON.stringify(response.data))
        });
