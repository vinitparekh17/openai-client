import jsPDF from 'jspdf';

const jspdf = new jsPDF()

export const htmlToPDF = (html: HTMLDivElement) => {
    jspdf.html(html, {
        x: 10,
        y: 10,
        autoPaging: true,
        windowWidth: 1000,
        html2canvas: {
            scrollY: 0,
            scrollX: 0,
            height: 1000,
            width: 1000,
        },
        width: 100,
    });

    jspdf.save('transcript.pdf');
}