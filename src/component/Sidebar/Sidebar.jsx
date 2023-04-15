import React, { useState } from 'react'; 
import './sidebar.css'
import Logo from '../../imgs/wolf.png'
import {SidebarData} from '../../Data/data.js'


const Sidebar = () => {
  const [selected , setSelected] = useState(0);

  return (

    <div className="sidebar">
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Lazy<span>W</span>olf</span>
        </div>

        <div className="menu">
          {SidebarData.map((item,index)=>(
            
              <div className={selected === index ? "menuitems active":"menuitems"}  
              key={index}
              onClick={()=>setSelected(index)}             
              >
                  <item.icon/>
                    <span>{item.title}</span>
              </div>
            
          ))}
          
        </div>
    </div>
  )
}

export default Sidebar;
