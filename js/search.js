document.addEventListener("DOMContentLoaded", function(){
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const noteList = document.getElementById("note-list");
    const pdfList = document.getElementById("pdf-list");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.trim();
        if (query !== "") {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "../php/search.php?query=" + encodeURIComponent(query));
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    displaySearchResults(response);
                } else {
                    console.error("Error: " + xhr.status);
                }
            };
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log("Response received:", xhr.responseText);
                    const response = JSON.parse(xhr.responseText);
                    console.log("Parsed response:", response);
                    displaySearchResults(response);
                } else {
                    console.error("Error: " + xhr.status);
                }
            };
            xhr.send();
        }
    });

    function displaySearchResults(results) {
        noteList.innerHTML = ""; 
        pdfList.innerHTML = ""; 
    
        if (results.length > 0) {
            results.forEach(function(result) {
                const fileName = result.file_address.split("/").pop();
                
                const listItemText = result.username ? result.username + " - " + fileName : fileName;
                
                const listItem = document.createElement("li");
                listItem.textContent = listItemText; 
                // Determine whether the file is a PDF or not based on file extension
                if (fileName.endsWith(".pdf")) {
                    const downloadLink = document.createElement("a");
                    downloadLink.textContent = "Download";
                    downloadLink.href = result.file_address;
                    downloadLink.download = fileName; // Set the download attribute
                    listItem.appendChild(downloadLink);
                    
                    pdfList.appendChild(listItem);
                } else {
                    noteList.appendChild(listItem);
                }
            });
        } else {
            const message = document.createElement("li");
            message.textContent = "No matching files found.";
            noteList.appendChild(message);
        }
    }
});