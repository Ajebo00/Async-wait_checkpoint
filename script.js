//Task 1 Iterating with Async/Await
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await delay(1000);
        console.log(value);
    }
}

// Example usage
iterateWithAsyncAwait([1, 2, 3, 4, 5]);




//Task 02: Awaiting a Call
const fetchData = async () => {
    // Simulate a delay and then return data
    return new Promise(resolve => {
        setTimeout(() => resolve({ data: 'Sample data from API' }), 1000);
    });
};

async function awaitCall() {
    const response = await fetchData();
    console.log('Data received:', response.data);
}

// Example usage
awaitCall();



//Handling Errors with Async/Await
const fetchDataWithError = async () => {
    // Simulate a function that might fail
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve({ data: 'Sample data from API' });
            } else {
                reject('Failed to fetch data');
            }
        }, 1000);
    });
};

async function awaitCallWithErrorHandling() {
    try {
        const response = await fetchDataWithError();
        console.log('Data received:', response.data);
    } catch (error) {
        console.log('Error: Unable to fetch data. Please try again later.');
    }
}

// Example usage
awaitCallWithErrorHandling();



//Task 04: Awaiting Concurrent Requests
const fetchFromAPI = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve(`Data from ${url}`);
            } else {
                reject(`Failed to fetch data from ${url}`);
            }
        }, 1000);
    });
};

async function concurrentRequests() {
    const url1 = 'https://api.example.com/data1';
    const url2 = 'https://api.example.com/data2';

    try {
        const [response1, response2] = await Promise.all([fetchFromAPI(url1), fetchFromAPI(url2)]);
        console.log('Responses received:', response1, response2);
    } catch (error) {
        console.log('Error:', error);
    }
}

// Example usage
concurrentRequests();
