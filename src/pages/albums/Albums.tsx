import React, {useState} from 'react';
import {Box, Button, Modal, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import CloseIcon from '@mui/icons-material/Close';
import {userSlice} from "../../store/reducers/userReducer";

const Albums = () => {
    const userId = '1'
    const users = useAppSelector(state => state.userReducer.users)
    const state = useAppSelector(state => state)
    const user = users.find(u => u.userId === userId)
    // @ts-ignore
    const albumCount = user.albums.length
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        borderRadius: '12px',
        backgroundColor: '#181818',
        color: 'white',
        boxShadow: 24,
        p: 4,
    };

    const dispatch = useAppDispatch()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let [name, setName] = useState('')
    let [description, setDescription] = useState('')

    let [albumNameError, setAlbumNameError] = useState(false)
    const onCreateAlbumHandler = () => {

        if(name.trim() === '') {
            setAlbumNameError(true)
        } else {
            dispatch(userSlice.actions.addAlbum({name, description, userId: user.userId}))
        }
    }
    const onChangeAlbumNameInputHandler = (v:any) => {
        if(albumNameError){
            setAlbumNameError(false)
        }
        setName(v)
    }

    return (
        <div className={'albums_main'}>
            <div className={'albums_b1'}>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 10, alignItems: "center"}}>
                    <span style={{marginLeft: 16, fontSize: 17, fontWeight: 600}}>
                        <span style={{color: "white"}}>My albums</span> <span style={{color: "#7d7d7d"}}>{albumCount}</span>
                    </span>
                    <span style={{marginRight: 16}}>
                        <Button onClick={handleOpen}>Open modal</Button>
<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    {/*<Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>*/}
      <div style={{color: "#7d7d7d"}}>
          <div style={{display: "flex", justifyContent: "space-between", position: "relative", bottom: '10px'}}>
          <span style={{fontWeight: 500, fontSize: 17}}>
              Create album
          </span>
              <span onClick={handleClose}><CloseIcon className={'closeIconStyle'}/></span>
              </div>
          <div className={'albums_b1_modal_trace'}></div>
          <div style={{fontWeight: 500, fontSize: 14}}>
              Name
          </div>
          <div>
              <input className={albumNameError ? 'inputError' : ""} value={name} onChange={(e)=>{onChangeAlbumNameInputHandler(e.currentTarget.value)}}
                     style={{backgroundColor: "transparent", border: "1px solid #4f4f4f", borderRadius: '6px',
              width: '100%', marginTop: '12px', marginBottom: '12px', height: '25px', outline: "none", caretColor: "white"}}/>
              {albumNameError && <div style={{color: "red"}}>Name can't be empty</div>}
          </div>
          <div style={{fontWeight: 500, fontSize: 14}}>
              Description
          </div>
          <div>
              <textarea value={description} onChange={(e)=>setDescription(e.currentTarget.value)} style={{backgroundColor: "transparent", border: "1px solid #4f4f4f", borderRadius: '6px',
              width: '100%', marginTop: '12px', marginBottom: '12px', height: '100px', outline: "none", caretColor: "white"}}/>
          </div>
          <div>Who can to see this album?<span className={'albums_b1_text_decor'}>All users</span>.</div>
          <div style={{marginTop: '12px', marginBottom: '12px'}}>Who can to comment photos?<span className={'albums_b1_text_decor'}>All users</span>.</div>
          <div className={'albums_b1_modal_trace'}></div>
            <div>
              <span className={'albums_b1_modal_buttons'}>
              <Button onClick={handleClose} style={{color: "#7d7d7d"}}>Cancel</Button>
              <Button onClick={onCreateAlbumHandler} style={{color: "black", backgroundColor: "#7d7d7d" }}>Create album</Button>
          </span>
          </div>
      </div>
  </Box>
</Modal>
                        <Button size={"small"} style={{backgroundColor: 'white', color: "black"}}>Add photos</Button>
                    </span>
                </div>
                <div className={'albums_b1_trace'}></div>
                <div style={{marginLeft: 16, display: "flex", justifyContent: "space-between", marginRight: 16}}>{/*albumPhoto*/}
                    <div style={{backgroundColor: "white", width: '190px', height: '130px'}}>
                        {<img style={{width: '100%', height: '100%'}} src={user.albums[0].photos[user.albums[0].photos.length - 1].urlPhoto}/>}
                    </div>
                    <div style={{backgroundColor: "white", width: '190px', height: '130px'}}>
                    </div>
                    <div style={{backgroundColor: "white", width: '190px', height: '130px'}}>
                    </div>
                </div>

            </div>
            <div className={'albums_b2'}></div>
        </div>
    );
};

export default Albums;