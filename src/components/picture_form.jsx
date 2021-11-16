import React from "react";

class DisplayImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      imageUrl: null, 
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <input type="file" name="myImage" onChange={this.onImageChange} />
            <img src={this.state.image} height="150" width="200" />

            {/* <center><button className="inputfile"><input type="file" onChange={this.handleFile} id="file" className="custom-file-input" /></button></center>
            <button className="upload-button" type="submit" onClick={this.handleFile}>Upload</button> */}

          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;
