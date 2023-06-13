

export default async function BlobToByte64(blob) {

  // create a new file reader
  const reader = new FileReader();

  // create a promise that will resolve when the file reader is ready
  const base64PDFData = await new Promise((resolve, reject) => {

    // setup event listeners to handle the file reading
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };

    // handle errors
    reader.onerror = () => {
      reject(reader.error);
    };

    // read the file as a data url
    reader.readAsDataURL(blob);
  });

  //add the pdf header to the base64 string
  const base64PDF = 'data:application/pdf;base64,' + base64PDFData;

  // return the base64 string
  return base64PDF;
}