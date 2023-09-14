import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Link} from "react-router-dom";
import {FUNDING_STATE} from "../../helper/funding-state-handler";
import {getDateKRString} from "../../helper/date-string";

const ProfileContentCreated = () => {
    const {user, auth} = useSelector((state: RootState) => state.ProfileReducer);

    return (
        <div className="tab-pane fade" id="profile-create" role="tabpanel">
            <table className="table">
                <thead>
                <tr id="profile-created-table-header">
                    <th scope="col">펀딩제목</th>
                    <th scope="col">진행률</th>
                    <th scope="col">마감</th>
                    <th scope="col">상태</th>
                    {auth === true && <th scope="col">내역</th>}
                    <th scope="col">정산</th>
                    <th scope="col">NFT</th>
                </tr>
                </thead>
                <tbody id="profile-created-table">
                { user!.create.map(funding => {
                    return (
                        <tr>
                            <td><Link to={'/funding'} state={{ networkId: funding.networkId, address: funding.address}}>{funding.title}</Link></td>
                            <td>{((funding.donation / funding.goal) * 100).toFixed(0)}%</td>
                            <td>{getDateKRString(funding.edate)}</td>
                            <td>{FUNDING_STATE[funding.state].word}</td>
                            {auth === true && <td><Link to={"/history"} state={{networkId: funding.networkId, address: funding.address}}>보기</Link></td>}
                            <td>{funding.receiveHash ? <a>정산완료</a> : <p>내역없음</p>}</td>
                            <td>{funding.receiveHash && <>발행완료<a target={"_blank"}><i className={"material-icon ms-1"}>open_in_new</i></a></>}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ProfileContentCreated;