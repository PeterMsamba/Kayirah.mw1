const pdfData = [
    {
        name: "Document 1",
        thumbnail: "lecture1.png", // Replace with actual thumbnail path
        pdf: "LECTURE_1.pdf" // Replace with actual PDF path
    },
    {
        name: "Document 2",
        thumbnail: "thumbnail2.jpg",
        pdf: "document2.pdf"
    },
    {
        name: "Document 3",
        thumbnail: "thumbnail3.jpg",
        pdf: "document3.pdf"
    },
    {
        name: "Document 4",
        thumbnail: "thumbnail4.jpg",
        pdf: "document4.pdf"
    },
    {
        name: "Document 5",
        thumbnail: "thumbnail5.jpg",
        pdf: "document5.pdf"
    },
    {
        name: "Document 6",
        thumbnail: "thumbnail6.jpg",
        pdf: "document6.pdf"
    },
    {
        name: "Document 7",
        thumbnail: "lecture1.png", // Replace with actual thumbnail path
        pdf: "LECTURE_1.pdf" // Replace with actual PDF path
    },
    {
        name: "Document 8",
        thumbnail: "thumbnail8.jpg",
        pdf: "document2.pdf"
    },
    {
        name: "Document 9",
        thumbnail: "thumbnail9.jpg",
        pdf: "document3.pdf"
    },
    {
        name: "Document 10",
        thumbnail: "thumbnail10.jpg",
        pdf: "document4.pdf"
    },
    {
        name: "Document 11",
        thumbnail: "thumbnail11.jpg",
        pdf: "document5.pdf"
    },
    {
        name: "Document 12",
        thumbnail: "thumbnail12.jpg",
        pdf: "document6.pdf"
    }
    // Add more PDF entries as needed
];

const pdfContainer = document.getElementById("pdf-container");
const pdfViewerContainer = document.getElementById("pdf-viewer-container");
const pdfViewer = document.getElementById("pdf-viewer");

pdfData.forEach(item => {
    const pdfItem = document.createElement("div");
    pdfItem.classList.add("pdf-item");

    const thumbnail = document.createElement("img");
    thumbnail.src = item.thumbnail;
    pdfItem.appendChild(thumbnail);

    const name = document.createElement("p");
    name.textContent = item.name;
    pdfItem.appendChild(name);

    const viewButton = document.createElement("button");
    viewButton.textContent = "View";
    viewButton.addEventListener("click", () => viewPdf(item.pdf));
    pdfItem.appendChild(viewButton);

    pdfContainer.appendChild(pdfItem);
});

function viewPdf(pdfPath) {
    pdfViewer.src = pdfPath + "#toolbar=0&navpanes=0&scrollbar=0"; //Disable download and other tools.
    pdfContainer.classList.add("hidden");
    pdfViewerContainer.classList.remove("hidden");
}

function goBack() {
    pdfViewerContainer.classList.add("hidden");
    pdfContainer.classList.remove("hidden");
}
