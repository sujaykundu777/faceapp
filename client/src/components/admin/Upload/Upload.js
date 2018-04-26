import React, {Component} from 'react';
import './Upload.css';
import {Input,Button} from 'semantic-ui-react';




class Upload extends Component {
    constructor(){
        super();
        this.setState = {selectedFile: null}
    }
    
       
    fileChangedHandler = (event) => {
        this.setState({selectedFile: event.target.files[0]})
      }
      
      uploadHandler = () => { 
        console.log(this.state.selectedFile)
      }
      

   render(){
       return(
           <div className="UploadContainer">
                       
                        <h1> Upload Your Profile Photo </h1>

                       <Input type="file" onChange={this.fileChangedHandler}/> <span></span>
                        <Button onClick={this.uploadHandler} secondary>Upload!</Button>
               </div>
       );
   }
}

export default Upload;