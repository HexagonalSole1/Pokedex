import React from 'react';
import Style from "./Nav.module.css";
import ImagenLogo from '@/components/Atomos/ImagenLogos/ImagenLogo';
import Buscador from '@/components/Atomos/Input/Input';
import Link from 'next/link';
var Logo1 = "/imgs/pokebolaNav.png";


function Nav() {
  return (

    <Link href="/">
    <div className={Style.DivNav}>

<div className={Style.DivNavLogo}>
<ImagenLogo logo="/imgs/pokebolaNav.png" />
</div>
<div className={Style.DivNavSecciones}>

    
</div>

</div>
    
    
    </Link>
    
  );
}

export default Nav;
