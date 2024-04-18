const fetchData = async () => {
    const response = await fetch("http://localhost:8080/getres");

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const alldata = await response.json();

    // Sort the data based on the score in descending order
    const sortedData = alldata.data.sort((a, b) => b.score - a.score);

    let listContent = ''; // Initialize an empty string to hold list content

    // Slice the sorted array to get only the first five elements
    const topFiveData = sortedData.slice(0, 5);

    // Loop through each element in the top five data
    for (const data of topFiveData) {
        console.log(data); // Logging each element of the top five data
        // Concatenate name and score for each item
        const itemContent = `<li>${data.name} - ${data.score}</li>`;
        // Append each item's content to the listContent string
        listContent += itemContent;
    }

    // Set the innerHTML of listofscore to the concatenated listContent
    document.getElementById('listofscore').innerHTML = listContent;
};

fetchData();
