import{Routes,Route} from "react-router-dom"
import Homepage from "./asset/user/homepage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./asset/user/theme/masterLayout";
import ProfilePage from "./asset/user/profilePage";

const RenderUserRouter=()=>{
    const userRouter=[
        {
            path:ROUTERS.USER.HOME,
            component:<Homepage/>
        },
        {
            path:ROUTERS.USER.PROFILE,
            component:<ProfilePage/>
        }
    ]
    return (
        <MasterLayout>
            <Routes>
                {
                    userRouter.map((item,key)=>(
                    <Route key={key} path={item.path} element={item.component}/>))
                }
            </Routes>
        </MasterLayout>
    
    )
}
const RouterCustom=()=>{
    return RenderUserRouter();
}
export default RouterCustom;