interface layoutProps {
    children: React.ReactNode
}

const layout = ({children}:layoutProps) => {
    return (
        <div className="bg-cover w-full h-[100vh] flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">{children}</div>
    );
}
 
export default layout;