import { Layout } from 'antd';
import Contents from "./Contents";
import Headers from "./Headers";



const {Footer } = Layout;


const App = () => {
    
    
    
    return (
        <>
    <Layout>
      <Headers />
      <Contents />
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        同学 ©{new Date().getFullYear()} Created by Merodzh
      </Footer>
    </Layout>
           
        </>
    )
}
export default App