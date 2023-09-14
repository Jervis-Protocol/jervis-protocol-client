const ProfileTabComponent = () => {
    return (
        <ul className="nav nav-pills my-4" id="profile-tab" role="tablist" data-aos="fade-up" data-aos-delay="400">
            <li className="nav-item" role="presentation">
                <button className="btn nav-link active" id="profile-contribute-tab" data-bs-toggle="pill"
                        data-bs-target="#profile-contribute" type="button" role="tab" aria-selected="true">참여한 펀딩
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="btn nav-link" id="profile-create-tab" data-bs-toggle="pill"
                        data-bs-target="#profile-create" type="button" role="tab" aria-selected="false">개설한 펀딩
                </button>
            </li>
        </ul>
    )
}

export default ProfileTabComponent;