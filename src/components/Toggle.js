import React, {useState} from 'react';
import styled from 'styled-components';

const Toggle = ({children}) => {
    const [toggle, setToggle] = useState(false);

    return(
    <ToggleStyle onClick={()=> setToggle(!toggle)}>
        <div><li style={{display: 'inline'}}>SELECT MOVIE TYPE</li>
            <li style={{display: 'inline'}}>{toggle? 'X':'>'}</li>
        </div>
        {toggle?children: ''}
    </ToggleStyle>)
}

const ToggleStyle = styled.div`
    cursor: pointer;
`
export default Toggle