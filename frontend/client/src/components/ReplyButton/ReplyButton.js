import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ReplyForm from '../ReplyForm/ReplyForm';

const ReplyButton = (props) => {
  const { threadID, isButtonDisabled } = props
  
  const [openReplyForm, setOpenReplyForm] = useState(false)

  

  return (
    <div>
      <Button disabled={isButtonDisabled} variant="outlined" color="primary" onClick={() => setOpenReplyForm(true)}>
        Reply
          </Button>
      <ReplyForm threadID={threadID} openReplyForm={openReplyForm} setOpenReplyForm={setOpenReplyForm} />
    </div>
  );
}

export default ReplyButton