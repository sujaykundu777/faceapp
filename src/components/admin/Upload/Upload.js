import React, {Component} from 'react';
import './Upload.css';
import {Input,Button,Form} from 'semantic-ui-react';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          selectedFile: '',
          imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
		  this._handleSubmit = this._handleSubmit.bind(this);
		
    }


      _handleImageChange(event) {
        event.preventDefault();
    
        let reader = new FileReader();
         let file = event.target.files[0];
        reader.onloadend = () => {
          this.setState({
            selectedFile: file,
            imagePreviewUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }

      _handleSubmit(event) {
        event.preventDefault();
      //  console.log(this.state.selectedFile);
        var formData = new FormData();
      
        // Fields in the post
        formData.append('selectedFile', this.state.selectedFile);
        // formData.append('imagePreviewUrl', this.state.imagePreviewUrl);
        let myHeaders = new Headers({
          'Access-Control-Allow-Origin':'*',
          });

        fetch('https://faceapp-node.herokuapp.com/api/upload', {
          method: 'POST',
          body: formData,
          headers: myHeaders
        })
        .then( function(res) {
          alert('Image Upload Successful');
        })
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
                      
                        <Form onSubmit={this._handleSubmit}>
                        <Input className="fileInput" 
                               type="file" 
                               name="selectedFile"
                               onChange={this._handleImageChange} />
                               
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
