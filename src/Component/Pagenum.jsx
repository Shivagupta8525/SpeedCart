import React,{memo} from 'react';

function Pagenum () {
  return(
    <div className="flex gap-2 px- py-4 flex-start">
      <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">1</a>
      <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">2</a>
      <a className="px-2  border text-red-500 border-red-500 rounded-sm" href="">3</a>
      </div>
  );
  
}

export default memo(Pagenum);