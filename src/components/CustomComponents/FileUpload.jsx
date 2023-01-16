import React from "react"
import { useState } from "react"
import Button from "./Button"

export default function FileUpload(params) {

  const [fileName, setFileName] = useState(null)

  const allowedType = ['application/pdf']

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (e) => {
    // this is the local upload section, change if running on aws with s3
    let selectedFile = e.target.files[0]
    setFileName(selectedFile.name)
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
    <>
      <Button onClick={handleClick} style={{width: 300}}>
        {fileName ? <>Uploaded: {fileName}</> : "Upload File"}
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />

      {/* When file is uploaded successfully display "Uploaded <Filename>" */}
    </>
  )

};
