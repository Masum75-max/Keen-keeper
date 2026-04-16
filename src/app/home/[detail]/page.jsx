import GreatDetail from "./GreatDetail";


const Detailpage = async({params}) => {


    const {detail } = await params;

    console.log(detail);

   

    return (
        <div>
            <GreatDetail id={detail}></GreatDetail>
        </div>
    );
};

export default Detailpage;