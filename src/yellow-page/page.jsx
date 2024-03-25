import HeroSectionWithSearchBar from "./components/heropage";
import TableComponent from "./components/table";


function YellowPage(){
    return(
        <div className="max-w-screen-xl mx-auto p-8 text-center">
        <HeroSectionWithSearchBar/>
        <TableComponent/>
        </div>
    )
}
export default YellowPage;