const fetchData = async () => {
    try {
        const response = await fetch('https://mindmaze.onrender.com/getres', {
            mode: 'cors' // Use 'cors' mode to allow access to the response body
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        
        // Update your UI with the fetched data
        const sortedData = data.data.sort((a, b) => b.score - a.score);
        let listContent = '';

        const topFiveData = sortedData.slice(0, 5);

        for (const data of topFiveData) {
            const itemContent = `<li>${data.name} - ${data.score}</li>`;
            listContent += itemContent;
        }

        document.getElementById('listofscore').innerHTML = listContent;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

fetchData();
