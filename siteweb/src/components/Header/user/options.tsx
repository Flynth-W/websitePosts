import React, { useState  } from 'react';

export function Options(props){
  const [data,setData] = useState(true)
  
  function click( _props ){
    props.setData(false)
  }

  if( props.data && data){
    return (
    <div id='headerUserOptions' className='Top-User-Options'  >
      <div className='Top-User-Options-Button' onClick={click}>
        <div className='Top-User-Options-Button-exit'>
<svg width="auto" height="auto" viewBox="0 0 28 28" fill="none" ><path d="M2.32129 2.32363C2.72582 1.9191 3.38168 1.9191 3.78621 2.32363L25.6966 24.234C26.1011 24.6385 26.1011 25.2944 25.6966 25.6989C25.2921 26.1035 24.6362 26.1035 24.2317 25.6989L2.32129 3.78854C1.91676 3.38402 1.91676 2.72815 2.32129 2.32363Z" fill="black"/><path d="M25.6787 2.30339C25.2742 1.89887 24.6183 1.89887 24.2138 2.30339L2.30339 24.2138C1.89887 24.6183 1.89887 25.2742 2.30339 25.6787C2.70792 26.0832 3.36379 26.0832 3.76831 25.6787L25.6787 3.76831C26.0832 3.36379 26.0832 2.70792 25.6787 2.30339Z" fill="black"/></svg>

        </div>
      </div>
      <div>data data data</div>
    </div>
    )
  }
  return (<div></div>)
}
