import ViewPDF from 'components/CustomComponents/PDFViewer'

export default function Presenting(params) {

    return (
        <>
             <ViewPDF pdfFile={params.pdfFile} />
        </>
    );
}