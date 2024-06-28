const pic = [
  "https://images.unsplash.com/photo-1596697938846-313cdbbe4fd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjBnYW1pbmd8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1563796021702-1e8b515d79e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1632597327016-6119d0efd7a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXIlMjBnYW1pbmd8ZW58MHwxfDB8fHww",
  "https://images.unsplash.com/photo-1656853835131-1c9e0136b65f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1563796021910-f0b98cdf1164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1563796021702-1e8b515d79e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1558742619-fd82741daa99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwZ2FtaW5nfGVufDB8MXwwfHx8MA%3D%3D"
]

function Ads() {
  return (
    <div>
        <div className='h-80 flex overflow-auto rounded-xl w-full gap-2 mt-10 border-2'>
            {pic.map((e,i)=>(
              <img className='h-72 m-1 rounded-lg hover:scale-105 duration-200' key={i} src={e} alt="" />
            ))}
        </div>
    </div>
  )
}

export default Ads