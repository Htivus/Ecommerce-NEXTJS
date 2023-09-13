import { BillboardsCLient } from "./components/client";

const billboardsPage = () => {
    return ( 
        <div className="flex-col">
           <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardsCLient
                 />
           </div>
        </div>
     );
}
 
export default billboardsPage;