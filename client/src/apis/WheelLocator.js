import axios from 'axios';

export default axios.create ({
    baseURl: "http://localhost:3001/api/v1/wheels",
});