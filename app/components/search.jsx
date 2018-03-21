import React from 'react';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

//Search Component for entering an Artist using Bootstrap
export default class Search extends React.Component {
  render() {
    return (
      <div id="formContainer">
          <FormGroup
            controlId="formBasicText"
            validationState={this.props.getValidationState()}
          >
            <FormControl 
              type="text"
              value={this.props.state.query}
              placeholder="Find Artist"
              onInput={this.props.handleInputChange}
              onClick={this.props.getAlbum} 
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button 
            className="submitBtn"
            type="submit"
            onClick={this.props.getAlbum} 
            bsStyle="info">Submit
          </Button>
      </div>
    )
  }
}


