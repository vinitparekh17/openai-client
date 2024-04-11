import jsPDF from 'jspdf';
import toast from 'react-hot-toast';

const jspdf = new jsPDF()

export const htmlToPDF = (html: string) => {

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
    }).then(() => {
        jspdf.save('transcript.pdf')
        toast.success("Transcript generated successfully...")
    }).catch(err => {
        console.error(err)
        toast.error("Unable to generate transcript...")
    })
}