import bg from "../../public/bg.avif"
interface signUpLayoutProps{
    children: React.ReactNode
}

const signLayout = ({children}:signUpLayoutProps) => {
    return ( 
        <div className=" bg-cover w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500" >
            {children}
        </div>
     );
}
 
export default signLayout;