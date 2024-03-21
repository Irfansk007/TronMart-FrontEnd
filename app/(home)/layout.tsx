import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Topbar from "@/components/Topbar";

interface HomeLayoutProps{
children: React.ReactNode
}
const layout = ({children}:HomeLayoutProps) => {
    return (
        <div>
          <Topbar />
          <Header />
            {children}
            <NewsLetter/>
            <Footer/>
        </div>
    );
}
 
export default layout;