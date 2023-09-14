import {Modal, ModalBody, ModalHeader} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/root.reducer";
import FundingDonationReward from "./funding.donation.reward";
import FundingDonationBeneficiary from "./funding.donation.beneficiary";
import FundingDonationValue from "./funding.donation.value";
import FundingDonationAgree from "./funding.donation.agree";
import FundingDonationAction from "./funding.donation.action";
import {onToggleDonationModalAction} from "../../action/funding.action";
import {INFT} from "../../type/_data/nft.type";

export type IFundingDonationModalState = {
    nfts: Array<INFT>
}

const FundingDonation = (state: IFundingDonationModalState) => {
    const dispatch = useDispatch();
    const {isOpenDonationModal} = useSelector((state: RootState) => state.FundingDonationReducer);

    return (
        <Modal show={isOpenDonationModal} centered={true}
               dialogClassName={"modal-dialog modal-dialog-centered modal-lg"}
               contentClassName={"modal-content shadow my-10"}>
            <ModalHeader>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => dispatch(onToggleDonationModalAction())}></button>
            </ModalHeader>
            <ModalBody className={"modal-body p-5 pt-0"}>
                <FundingDonationReward nfts={state.nfts}/>
                <FundingDonationValue/>
                <FundingDonationBeneficiary/>
                <FundingDonationAgree/>
                <FundingDonationAction/>
            </ModalBody>
        </Modal>
    )
}

export default FundingDonation;