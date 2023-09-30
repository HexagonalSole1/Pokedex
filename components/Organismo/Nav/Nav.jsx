import React from 'react';
import Style from "./Nav.module.css";
import ImagenLogo from '@/components/Atomos/ImagenLogos/ImagenLogo';
import Buscador from '@/components/Atomos/Input/Input';
import Link from 'next/link';
var Logo1 = "/imgs/pokebolaNav.png";


function Nav() {
  return (

   
    <div className={Style.DivNav}>

<div className={Style.DivNavLogo}>
<a href="/">
<ImagenLogo logo="/imgs/pokebolaNav.png" />
</a>
</div>
<div className={Style.DivNavSecciones}>

    
</div>

</div>
    
    
  
    
  );
}

export default Nav;
