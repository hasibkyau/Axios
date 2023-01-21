import axios from 'axios';    
axios.get("https://dht-11-7fe63-default-rtdb.firebaseio.com")
        .then(response => {
            conslol.log(response.data);
            localStorage.setItem("Data", JSON.stringify(response.data))
        });
