// Callback
const getData = (callback) => {
    setTimeout(() => {
        const data = `This is the data.`;
        callback(data);
    }, 6000);
}

const processeData = (data) => {
    console.log(`Processed data:`, data);
}

getData(processeData);