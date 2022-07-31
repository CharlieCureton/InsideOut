import * as React from 'react';
import Stack from '@mui/material/Stack';
import $ from 'jquery';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';

function Blog(props) {
    const [loading, setLoading] = React.useState(false);
    const [disabled, setDisabled] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    function onFocus() {
        $('#message').addClass('focus');
    }
    function Cancel() {
        setLoading(false);
        $('#message').removeClass('focus');
        setDisabled(true);
        $('#message').val('');
    }
    function checkMessage() {
        if ($('#message').val().length > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    };
    return (
        <div className="chat-wrapper home-subpage" id="blog-page">
            <div className="chat-body">
                <div className="message-box">
                    <form id="message-form" method="POST">
                        <textarea placeholder='Send a message to everyone' id="message" onClick={onFocus} onKeyDown={checkMessage}></textarea>
                        <Stack
                            spacing={2}
                            direction="row"
                            justifyContent="flex-end"
                        >
                            <Button onClick={Cancel} variant="text" style={{ color: "gray" }}>
                                Cancel
                            </Button>
                            <LoadingButton id="message-submit-btn" color="primary" variant="contained" style={{
                                padding: "7px 23px",
                                fontSize: "18px"
                            }}
                                loading={loading}
                                onClick={handleClick}
                                disabled={disabled}
                            >
                                <input hidden type="submit" />
                                Post
                            </LoadingButton>
                        </Stack>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Blog;