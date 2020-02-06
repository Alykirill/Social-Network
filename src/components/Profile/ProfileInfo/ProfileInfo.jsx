import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileEdit from "./ProfileEdit";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto,saveProfile}) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() =>{
            setEditMode(false);
        })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                {editMode
                    ? <ProfileEdit initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;