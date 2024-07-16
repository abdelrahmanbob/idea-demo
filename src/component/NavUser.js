import React from 'react';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(fas);

function NavUser() {


  return (
    <>
        <FontAwesomeIcon icon="user"/>
    </>
  );
}

export default NavUser;