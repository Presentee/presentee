//import { useState } from "react"

export default function FileUpload(params) {

  //const [pdfFile, setPDFFile] = useState(null)

  const allowedType = ['application/pdf']

  const handleChange = (e) => {
    // this is the local upload section, change if running on aws with s3
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && allowedType.includes(selectedFile.type)) {
        var reader = new FileReader()
        reader.readAsDataURL(selectedFile)
        reader.onload = (e) => {
          params.setPDFFile(e.target.result)
        }
      }
      else {
        params.setPDFFile(null)
      }
    }
    // if wrong extension then do this
    else {
      console.log("please try again")
    }
  }


  return (
    <form class="button">
      <input type="file" className='form-control' onChange={handleChange} />
    </form>

  )

};

// const styles = {
//   verticallyCentered: {
//     margin: '0',
//     textAlign: 'center',
//     position: 'relative',
//     top: '70%',
//     transform: 'translateY(-50%)',
//   },
// };
