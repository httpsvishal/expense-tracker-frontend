const API_URL = import.meta.env.VITE_API_URL;


const login = async (formData) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    console.log('Response:', response);

    if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(errorData.msg || 'Failed to sign up');
    }
    const data = await response.json();
    console.log('Data:', data);
    return data;
}


const signup = async (formData) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    console.log('Response:', response);

    if (!response.ok) {
        const errorData = await response.json();
        console.log('Error data:', errorData);
        throw new Error(errorData.msg || 'Failed to sign up');
    }
    return response.json();
}

export { login, signup };