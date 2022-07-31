import React, { useEffect, useState } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Avatar } from '@mui/material';
import $ from 'jquery';
import { DropDown } from '../components/';
import '../css/Register.css';
import { Logo } from '../components/';
import Button from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

function Register(props) {
    const updateImage = () => {
        $('#logo').trigger('click');
    }

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }
    return (
        <div className={"App App-center-x " + props.bgColor}>
            <div className="container">
                <div className="container-header">
                    <Logo size="small" />
                    <Link to="/login" id="nav-link">
                        login instead
                    </Link>
                </div>
                <div className="inner-container">
                    <h2 id="primary-title">Register</h2>
                    <div className="register-form">
                        <div className="inner-register-form">
                            <div id="avatar"
                                onMouseEnter={() => $('#avatar-overlay').removeClass('hidden')}
                                onMouseLeave={() => $('#avatar-overlay').addClass('hidden')}
                                onClick={updateImage}
                            >
                                <div id="avatar-overlay" className="hidden">
                                    <CameraAltIcon />
                                </div>
                                {<Avatar id="avatar-img" alt="User Avatar" src={preview} sx={{ width: 120, height: 120 }} />}
                            </div>
                            <div id="flag">
                                <DropDown />
                            </div>
                            <form id="user-data" autoComplete='off'>
                                <input type="file" id="logo" className='hidden' onChange={onSelectFile}></input>
                                <div id="info">
                                    <div id="name">
                                        <input type="text" id="fname" name="fname" placeholder='first name'></input>
                                        <input type="text" id="lname" name="lname" placeholder='last name'></input>
                                    </div>
                                    <div id="sexuality">
                                        <input type="text" id="gender" name="gender" placeholder="Gender Identity"></input><br />
                                        <input type="text" id="pronouns" name="pronouns" placeholder="Pronouns"></input><br />
                                        <input type="text" id="sexuality" name="sexuality" placeholder="Sexuality"></input>
                                    </div>
                                </div>
                            </form>
                            <div id="privacy-setting">
                                <h5>Who can see this?</h5>
                                <select>
                                    <option>Friends Only</option>
                                    <option>Public (Anyone can see)</option>
                                    <option>Private (Only you can see)</option>
                                </select>
                            </div>
                        </div>
                    </div >
                    <br />
                    <h2>Tell us more about you (optional)</h2>
                    <textarea form="user-data" id="about-textarea" name="about-textarea" placeholder="Tell us about your experience, talents, hobbies and interests, or anything else you want to share
                    - please make sure you don't include too much personal information including:
                    1. Home Address
                    2. Phone Number,
                    3. Other people's info of any kind (without consent)
                    
                    - Please avoid an controversial topics
                    - Please avoid any innapropriate language
                    "
                    >
                    </textarea>
                    <Stack
                        spacing={1}
                        direction="row"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <Link to="/" id="back-link">
                            <Button
                                variant="contained"
                                className="orng-bg"
                                id="form-back"
                                style={{
                                    backgroundColor: "#FFA500"
                                }}
                            >
                                <NavigateBeforeIcon /> &nbsp;
                                Back
                            </Button>
                        </Link>
                        <Link to="#" id="next-link">
                            <Button id="form-next" variant="contained" color="primary" className="turq-bg" style={{ backgroundColor: "#30D5C8" }}>
                                Next &nbsp;
                                <NavigateNextIcon />
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </div>
        </div >
    );
}

export default Register;