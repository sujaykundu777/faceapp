import React, {Component} from 'react';
import './Upload.css';
import {Input,Button,Form} from 'semantic-ui-react';
import axios from 'axios';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          selectedFile: '',
          imagePreviewUrl: ''};
      }
       
      _handleImageChange(event) {
        event.preventDefault();
    
        let reader = new FileReader();
        let selectedFile = event.target.files[0];
    
        reader.onloadend = () => {
          this.setState({
            selectedFile: selectedFile,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(selectedFile)
      }

      _handleSubmit(event) {
        event.preventDefault();

        let formData = new FormData();

        formData.append('myFile', this.state.selectedFile, this.state.imagePreviewUrl);

        axios.post('http://localhost:3001/api/upload', formData)
           .then(function(response){
              console.log(response);
           });
        console.log('Selected Image Details :', this.state.selectedFile);
        console.log('Selected Image Url', this.state.imagePreviewUrl)
      } 
    
    

   render(){
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }
       return(
           <div className="UploadContainer">
                       
                        <h1> Upload Your Profile Photo </h1>
                      
                        <Form onSubmit={(event)=>this._handleSubmit(event)}>
                        <Input className="fileInput" 
                               type="file" 
                               name="selectedFile"
                               onChange={(event)=>this._handleImageChange(event)} />
                               
                                 <Button secondary 
                                 type="submit" >
                                 Upload Image</Button>
                          </Form>
                      <div className="imgContainer">
                        <div className="imgPreview">
                        {$imagePreview}
                        </div>
                        </div>
               </div>
       );
   }
}

export default Upload;