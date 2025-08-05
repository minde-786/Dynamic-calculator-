"use client"
import React, { useState } from 'react'


function Card() {
  const [data,setData]=useState('');

  const getValue=(event:React.MouseEvent<HTMLButtonElement>)=>{
    console.log(event.currentTarget.value)
    setData(data.concat(event.currentTarget.value) )  };

  const calculation = () => {
  try {
    setData(eval(data).toString());
  } catch {
    setData("Error");
  }
};
  const back=()=>{
      setData(data.slice(0,-1))
    };
  const clear=()=>{
      setData('')
    }
 
  return (
    <div className='flex justify-center  shadow-lg  '>
      <div> <h1 className='text-amber-50 text-center font-bold font-sans py-4 text-3xl hover:shadow-2xl shadow-lg border border-slate-900'>CALCULATOR 📱</h1>
      <div className='  bg-black border border-slate-800 rounded py-3 shadow-black hover:shadow-2xl px-8  lg:mb-22 m-12 '>
        <input placeholder='0'
       value={data} readOnly
       className=' p-3 m-1 border border-slate-500 shadow-lg hover:shadow-2xl bg-slate-300 rounded lg:px-8' />
     


<div className=' grid grid-cols-4  mt-4 gap-4'>
<button onClick={getValue} value='(' className='bg-white rounded p-1 shadow-lg border border-amber-600  hover:bg-slate-200'> ( </button>
<button onClick={getValue}value=')' className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> ) </button>
<button onClick={getValue}value='%'className='bg-white rounded p-1 shadow-lgborder border-amber-600 hover:bg-slate-200'>%  </button>
<button onClick={clear}className='bg-yellow-500 rounded p-1 shadow-lg hover:bg-yellow-600'> AC </button>

<button onClick={getValue}value='7'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 7 </button>
<button onClick={getValue}value='8'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'>8 </button>
<button onClick={getValue}value='9'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 9 </button>
<button onClick={getValue}value='*'className=' bg-blue-700 rounded p-1 shadow-lg  hover:bg-blue-800 '> * </button>

<button onClick={getValue}value='4'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'>4 </button>
<button onClick={getValue}value='5'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 5 </button>
<button onClick={getValue}value='6'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 6 </button>
<button onClick={getValue}value='-'className='bg-blue-700 rounded p-1 shadow-lg   hover:bg-blue-800 '> - </button>

<button onClick={getValue}value='1'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 1 </button>
<button onClick={getValue}value='2'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 2 </button>
<button onClick={getValue}value='3'className='bg-white rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> 3 </button>
<button onClick={getValue}value='+'className='bg-blue-700 rounded p-1 shadow-lg hover:bg-blue-800 '> + </button>

<button onClick={getValue}value='0'className='bg-white rounded p-1 shadow-lg border  border-amber-600 hover:bg-slate-200'> 0 </button>
<button onClick={back}className='bg-white text-black rounded p-1 shadow-lg border border-amber-600 hover:bg-slate-200'> Back</button>
<button onClick={calculation}className='bg-gradient-to-b from-cyan-300 to-teal-700 border rounded p-1 shadow-lg '> = </button>
<button onClick={getValue}value='/'className='bg-blue-700 rounded p-1 shadow-lg  hover:bg-blue-800  '> / </button>



             </div>
          </div> 
      </div>
   </div>
  )
}

export default Card
