import React,{useState} from 'react';
import './App.css';


function App() {
  const btnOptions = ['None', 'Primary', 'Warning', 'Danger']
  const [btnColor, setBtnColor] = useState('None')
  const [btnType, setBtnType] = useState('enabled')
  const [inpText, setInpText] = useState('')
  const handleChange = (e) => {
    setBtnColor(e.target.value)
  }

  const handleRadioChange = (e) => {
    setBtnType(e.target.value)
  }

  return (
    <div className='container'>
    <form className='form-container'>
    <div className='form-group'>
 <label htmlFor='btnVariant' style={{marginTop: '2px'}}>Button Variant</label>
 <div className='btn-select'>
  <select
  name='btnColor'
  onChange={handleChange}
  value={btnColor}
  >
  {btnOptions && btnOptions.map((item)=>(
    <option 
    key={item}
    id={item}
    value={item}>
    {item}
    </option>
  ))}
  </select>
  </div>
  </div>
    <div className='form-group'>
      <div className='radio-group'>
      <input 
  type="radio" 
  checked = {btnType === 'enabled'} 
  value="enabled"
  onChange={handleRadioChange} 
  /> Enabled
      </div>
<div className='radio-group'>
  <input 
  type="radio" 
  className='radio-btn' 
  value="disabled" 
  checked = {btnType === 'disabled'}
  onChange={handleRadioChange} 
  />Disabled
  </div>
    </div>
    <div className='form-group'>
  <label htmlFor='inp'  style={{marginTop: '2px'}}>Button Caption</label>
  <div className='btn-select'>
  <input 
  type='text'
  value={inpText}
  onChange={(e) => setInpText(e.target.value)} />
  </div>
    </div>
  </form>
    <button 
    className={`render-button ${btnColor === 'Primary' 
    ? 'btn-primary' : btnColor === 'Warning' ? 'btn-warning' : btnColor === 'Danger' ? 'btn-danger' : ''}`}
    disabled={btnType === 'disabled' ? true : null}
    >{inpText}</button>
    </div>
  );
}

export default App;
