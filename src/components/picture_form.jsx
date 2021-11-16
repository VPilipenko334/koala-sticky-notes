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
           
            <label class="upload-btn">
            <input type="file" id="input-file" onChange={this.onImageChange} />
            <span id="selectedFileName" className="upload-image">Upload Picture</span>
            </label>

            <div className="image" >
              <img src={this.state.image} draggable="true" id="preview"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;
