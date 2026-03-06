import React from 'react'

function Card({username = "S K M", post="SDE2"}) {
  return (
    <div>
      
        

        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/34786676/pexels-photo-34786676.jpeg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, accusamus?
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
        
        <h1 className='text-2xl bg-red-300 p-3 rounded-md'>This is card photo</h1>   
    </div>
  )
}

export default Card