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
          <div className="fileUpload">
            {/* <input type="file" className="upload" name="myImage" onChange={this.onImageChange} /> */}
            
            {/* <button className="add-picture" id="upload"> Upload Picture </button> */}
            
            <label class="upload-btn">
            <input type="file" id="input-file" onChange={this.onImageChange} />
            <span id="selectedFileName">Upload Picture</span>
            </label>

            <img src={this.state.image} />


          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;
