import React from 'react'
import lang from '../utils/languageContants'
import { useSelector } from 'react-redux'

const GptSearchbar = () => {
  const languageKey = useSelector((store)=> store.config.langaugePreference);
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='bg-black w-1/2 grid grid-cols-12'>
        <input type='text' className='p-4 m-4 col-span-9 bg-white' placeholder={lang[languageKey]?.gptSearchPlaceholder}/>
        <button type='submit' className='py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg'>{lang[languageKey]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchbar
