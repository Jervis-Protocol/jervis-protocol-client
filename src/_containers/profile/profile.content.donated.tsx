import {useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import {Link} from "react-router-dom";
import {getDateKRString} from "../../helper/date-string";
import {FUNDING_STATE} from "../../helper/funding-state-handler";

const ProfileContentDonated = () => {
    const {user} = useSelector((state: RootState) => state.ProfileReducer);
    return (
        <div className="tab-pane fade active show" id="profile-contribute" role="tabpanel">
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">펀딩제목</th>
                    <th scope="col">진행률</th>
                    <th scope="col">마감</th>
                    <th scope="col">상태</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody id="profile-donated-table">
                {user!.receipts.map( receipt => {
                    return (
                        <tr>
                            <td><Link to={'/funding'} state={{networkId: receipt.funding.networkId, address: receipt.funding.address}}>{receipt.funding.title}</Link></td>
                            <td>{((receipt.funding.donation / receipt.funding.goal) * 100).toFixed(0)}%</td>
                            <td>{getDateKRString(receipt.funding.edate)}</td>
                            <td>{FUNDING_STATE[receipt.funding.state].word}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default ProfileContentDonated;