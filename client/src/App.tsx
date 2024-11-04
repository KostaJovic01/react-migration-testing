import './App.css'
import Sidebar from "./components/organisms/Sidebar.tsx";
import SidebarHeader from "./components/molecules/SidebarHeader.tsx";
import SidebarButton from "./components/molecules/SidebarButton.tsx";
import IconHome from "./components/atoms/IconHome.tsx";
import IconUsers from "./components/atoms/IconUsers.tsx";

function App() {
  return (
    <>
      <div id='APP' className='w-screen h-screen bg-black flex flex-col font-Barlow'>

          <div className='flex flex-row h-full w-full'>
              <Sidebar>
                  <SidebarButton label={'My Organistation'} icon={<IconHome/>}/>
                  <SidebarButton label={'Users'} icon={<IconUsers/>} />
              </Sidebar>
              <body id='page content' className='bg-white h-full w-full'></body>
          </div>
      </div>
    </>
  )
}

export default App
