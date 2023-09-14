import ProfileContentDonated from "./profile.content.donated";
import ProfileContentCreated from "./profile.content.created";

const ProfileContentComponent = () => {
    return (
        <div className="tab-content mb-12 p-0" id="profile-tabContent" data-aos="fade-up" data-aos-delay="500">
            <ProfileContentDonated />
            <ProfileContentCreated />
        </div>
    )
}

export default ProfileContentComponent;