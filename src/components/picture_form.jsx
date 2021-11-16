import React from 'react';

export class UploadPicture extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        selectForm: 0,
        redirect: false,
        pictureFile: null,
        pictureUrl: null,
        tError: false
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
            let picture = new Image();
            picture.src = e.target.result;
            picture.onload = function(ev){
            let canvas = document.getElementById('canvas')
            let context = canvas.getContext('2d');
            canvas.width = picture.width;
            canvas.height = picture.height;           
            context.drawPicture(picture,0,0);
            this.setState({ pictureFile: file, pictureUrl: fileReader.result, selectForm: 1})
        }
    }
}

    handleSubmit(e) {
        if (this.state.tError === false) {
            const formData = new FormData();
            formData.append('picture[picture]', this.state.picture)
        }
    }

    handleCancel(e) {
        e.preventDefault();
        this.setState({ selectForm: 0 })
    }
    

    render() {

    // const PreviewPicture = this.state.pictureUrl ? <img className="preview" height="100" width="100" src={this.state.pictureUrl} /> : null; 


    if (this.state.selectForm === 0) {
        return (
                <div> 
                    <div className="upload-form">
                        <br/>
                        <center><button className="inputfile"><input type="file" onChange={this.handleFile} id="file" className="custom-file-input" /></button></center>
                            
                        <center>
                            <button className="file-upload"><label htmlFor="file">Select Photo</label></button> <br/><br/>
                            {/* <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>&nbsp; &nbsp; &nbsp; 
                            <button className="upload-button" type="submit" onClick={this.handleFile}>Upload</button> */}
                        </center>
                    </div>
                </div>
            )
        }

    if (this.state.selectForm === 1) {
            return (
                <div>
                     <label id="uploading-here">
                        <input type="file" onChange={this.handleFile} style={{ display: "none" }} />
                    </label>
                        {/* <form className="upload-form" onSubmit={this.handleSubmit}> */}
    
                             {/* {PreviewPicture} */}
                             <input type="file" id="pictureUpload" className="off" onChange={this.handleFile} accept = "image/*"/>
                            <label htmlFor="pictureUpload">Upload</label>
                             <canvas id= "canvas"></canvas>
                                    
                               </div>
            )
    }
    }
}

export default UploadPicture; 