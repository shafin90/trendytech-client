import CardBranch from "../CardBranch/CardBranch";


const CardBranchContainer = () => {
    return (
        <div className=" flex justify-between items-center w-11/12 mx-auto">
            <CardBranch cardCategory="Apps"></CardBranch>
            <CardBranch cardCategory="Gadgets"></CardBranch>
            <CardBranch cardCategory="Gear"></CardBranch>
        </div>
    );
};

export default CardBranchContainer;