pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.10.100/pdf.worker.min.js';

const pdfCards = document.querySelectorAll('.custom-card');

pdfCards.forEach(card => {
    const pdfUrl = card.dataset.pdf;
    const canvas = card.querySelector('.pdf-canvas');
    const container = card.querySelector('.custom-card__image');
    
    // Use container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc => {
        pdfDoc.getPage(1).then(page => {
            const viewport = page.getViewport({ scale: 1 });

            // Fit PDF to container (width and height)
            const scale = Math.min(containerWidth / viewport.width, containerHeight / viewport.height);
            const scaledViewport = page.getViewport({ scale: scale });

            canvas.width = scaledViewport.width;
            canvas.height = scaledViewport.height;

            const renderContext = {
                canvasContext: canvas.getContext('2d'),
                viewport: scaledViewport
            };

            page.render(renderContext);
        });
    }).catch(err => {
        console.error('Error loading PDF:', pdfUrl, err);
        canvas.parentElement.innerHTML = '<p style="color:red;">PDF could not be loaded</p>';
    });
});
