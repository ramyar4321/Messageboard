import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import ReplyForm from '../ReplyForm/ReplyForm';

const ReplyButton = (prop) => {
  const {id} = prop
  const [openReplyForm, setOpenReplyForm] = useState(false)

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={() => setOpenReplyForm(true)}>
        Reply
          </Button>
      <ReplyForm id={id} openReplyForm={openReplyForm} setOpenReplyForm={setOpenReplyForm} />
    </div>
  );
}

export default ReplyButton