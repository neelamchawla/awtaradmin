import React from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import Header from './header';

class NewPayment extends React.Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    city: '',
    state: '',
    zip: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
          <Header/>
          <h1 className="doc">Add Payment</h1>
        <div className="AddDoc">
                <form
                className='needs-validation'
                onSubmit={this.submitHandler}
                noValidate
                >
                <MDBRow>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='user'
                        value={this.state.fname}
                        name='fname'
                        onChange={this.changeHandler}
                        type='text'
                        id='materialFormRegisterNameEx'
                        label='First name'
                        outline
                        required
                    >
                        <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                    </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='address-card'
                        value={this.state.lname}
                        name='lname'
                        onChange={this.changeHandler}
                        type='text'
                        id='materialFormRegisterEmailEx2'
                        label='Last name'
                        outline
                        required
                    >
                        <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                    </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='envelope-open'
                        value={this.state.email}
                        onChange={this.changeHandler}
                        type='email'
                        id='materialFormRegisterConfirmEx3'
                        name='email'
                        label='Email address'
                        outline
                        required
                    >
                        {/* <small id='emailHelp' className='form-text text-muted'>
                        We'll never share your email with anyone else.
                        </small> */}
                    </MDBInput>
                    </MDBCol>

                    <MDBCol md='4'>
                    <MDBInput
                        icon='phone-square'
                        value={this.state.email}
                        onChange={this.changeHandler}
                        type='integer'
                        id='materialFormRegisterConfirmEx4'
                        name='number'
                        label='Phone Number'
                        outline
                        required
                    >
                        {/* <small id='emailHelp' className='form-text text-muted'>
                        We'll never share your email with anyone else.
                        </small> */}
                    </MDBInput>
                    </MDBCol>

                    <MDBCol md='4'>
                    <MDBInput
                        icon='calendar-alt'
                        value={this.state.email}
                        onChange={this.changeHandler}
                        type='date'
                        id='materialFormRegisterConfirmEx5'
                        name='date'
                        label=''
                        outline
                        required
                    >
                        {/* <small id='emailHelp' className='form-text text-muted'>
                        We'll never share your email with anyone else.
                        </small> */}
                    </MDBInput>
                    </MDBCol>

                    <MDBCol md='4'>
                    <MDBIcon icon="user-alt" />
                    <MDBInput
                        type="radio"
                        id="materialFormRegisterConfirmEx6"
                        name="radio-stacked"
                        required
                        label="Female"
                        />

                        <MDBInput
                        type="radio"
                        id="materialFormRegisterConfirmEx7"
                        name="radio-stacked"
                        required
                        label="Male"
                        >
                        <div className="invalid-feedback">
                            Invalid
                        </div>
                    </MDBInput>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='city'
                        value={this.state.city}
                        onChange={this.changeHandler}
                        type='text'
                        id='materialFormRegisterPasswordEx4'
                        name='city'
                        label='City'
                        outline
                        required
                    >
                        <div className='invalid-feedback ml-3 pl-3'>
                        Please provide a valid city.
                        </div>
                        <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                    </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='map-marked-alt'
                        value={this.state.state}
                        onChange={this.changeHandler}
                        type='text'
                        id='materialFormRegisterPasswordEx4'
                        name='state'
                        label='State'
                        outline
                        required
                    >
                        <div className='invalid-feedback ml-3 pl-3'>
                        Please provide a valid state.
                        </div>
                        <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                    </MDBInput>
                    </MDBCol>
                    <MDBCol md='4'>
                    <MDBInput
                        icon='location-arrow'
                        value={this.state.zip}
                        onChange={this.changeHandler}
                        type='text'
                        id='materialFormRegisterPasswordEx4'
                        name='zip'
                        label='Zip'
                        outline
                        required
                    >
                        <div className='invalid-feedback ml-3 pl-3'>
                        Please provide a valid zip.
                        </div>
                        <div className='valid-feedback ml-3 pl-3'>Looks good!</div>
                    </MDBInput>
                    </MDBCol>
                </MDBRow>
                <MDBCol md='4' className='mb-3'>
                    <div className='custom-control custom-checkbox pl-3'>
                    <input
                        className='custom-control-input'
                        type='checkbox'
                        value=''
                        id='invalidCheck'
                        required
                    />
                    <label className='custom-control-label' htmlFor='invalidCheck'>
                        Agree to terms and conditions
                    </label>
                    <div className='invalid-feedback'>
                        You must agree before submitting.
                    </div>
                    </div>
                </MDBCol>
                <MDBBtn color='primary' type='submit'>
                    Add
                </MDBBtn>
                <MDBBtn color='danger' type='cancel'>
                <Link className="link" to="Payments">
                    Cancel
                </Link>
                </MDBBtn>
                </form>
        </div>
      </div>
    );
  }
}

export default NewPayment;