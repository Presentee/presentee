import React from 'react';

class S3UploadTest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null
    }
  }

  handleFileChange = (e) => {
    this.setState({file: e.target.files[0]});
  }

  handleUpload = () => {
    const { file } = this.state;
    if (!file) return;
    // call the function that handles the file upload
    FileUpload(file);
  }

  render() {
    return (
      <div>
        <input type="file" onClick={handleClick} />
        <button onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default S3UploadTest;
