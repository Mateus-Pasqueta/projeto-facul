import axios from 'axios';

const api = axios.create({baseURL:"http://localhost:5000/api"});

const getCards = async () => {
    const response = await api.get('/plates');

    return response;
}

const login = async (data) => {
    const response = await api.post("/login", data);

    if(!response.data.token){
        return undefined
    }else {
        return response.data.token
    }
    
};

const addPlate = async (data) => {
    const token = localStorage.getItem("token");
    const response = await api.post('/newPlate', data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    
    return response;
}

const updatePlate = async (data) => {
    const token = localStorage.getItem("token");
    const response = await api.put(`/plates/${data.id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    
    return response;
}

const deletePlate = async (id) => {
    const token = localStorage.getItem("token");
    const response = await api.delete(`/plates/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return response.message
}

const getOrders = async () => {
    const response = await api.get('/orders');
    
    return response.data;
}

const addOrder = async (data) => {
    const token = localStorage.getItem("token");
    const response = await api.post('/newOrder', data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    
    return response.data;
}

const updateOrder = async (data) => {
    const token = localStorage.getItem("token");
    const response = await api.put(`/orders/${data.id}`, data, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    
    return response;
}

const getOrderById = async (id) => {
    const response = await api.get(`/orders/${id}`);
    
    return response.data;
}
    

export {
    getCards,
    login,
    addPlate,
    deletePlate,
    updatePlate,
    getOrders,
    addOrder,
    updateOrder,
    getOrderById
}