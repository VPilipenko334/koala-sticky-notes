import React from 'react';

export class UploadPicture extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        id: "",
        title: "",
        description: "",
        redirect: false,
        pictureFile: null,
        pictureUrl: null,
        tError: false,
        selectForm: 0
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);   

}

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ pictureFile: file, pictureUrl: fileReader.result, selectForm: 1})
        }

        if (file) {
            fileReader.readAsDataUrl(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null})
        }
    }

    handleSubmit(e) {
        e.prevenDefault();
        if (this.state.tError === false) {
            const formData = new FormData();
            formData.append('picture[title]', this.state.title)
            formData.append('picture[description]', this.state.description)
            formData.append('picture[picture]', this.state.picture)
        }
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ selectForm: 0})
    }

    render() {

    const PreviewPicture = this.state.pictureUrl ? <img className="preview" height="100" width="100" src={this.state.pictureUrl} /> : null; 


    if (this.state.selectForm === 0) {
        return (
                <div> 
                    {/* <button className="add-picture">Upload a picture</button> */}
                    <button className="input-file">Select Photo<input type="file" onChange={this.handleFile} id="file"></input></button>
                </div>
            )
        }
    }
}

export default UploadPicture; 