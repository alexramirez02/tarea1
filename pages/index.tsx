import Image from "next/image";

const Home = ()=> {
  return  <div className="flex h-screen gap-1 bg-#f1f5f9">
<aside className="debug w-[305px] flex flex-col h-full ">
  <section className="debug p-1">
    
    <div className="nombre1">
    
<img src= '/imagenes/alex.jpg' alt="foto alex" /> 
     <h1>Andy Ramirez
      </h1> 
      <span> Desarrollador Backend</span>
    </div>
    
  </section>
  
  <section className="debug">

    <div className="flex flex-col px-1 py-1 " >
      <div className=" todos ">
           <span>Edad</span>
           <span>42</span>
      </div>
    <div className="todos">
      <span>Email</span><span>Alex</span>
    </div>
    <div className="todos">
      <span>Tiempo Libre</span><span>Futbol</span>
    </div>
    <div className="todos">
       <span>Linkeded </span><span>Link</span>
    </div>
    </div>
    
   

  </section>
  <section className="debug flex-col">
     <h3>Idiomas</h3>
 <div >
  <div className="todos">
    <span>Español</span><span>100%</span>
  </div>
 <div className="w-74 h-2 bg-#fde047 debug"></div>
 </div>
 
 <div >
  <div className="todos">
    <span>Ingles</span><span>20%</span>
  </div>
 <div className="w-20 h-2 bg-#fde047 debug"></div>
 </div>
 
  </section>


  <section className="debug flex-col">
    <h3>Lenguajes De Programacion</h3>
  <div >
  <div className="todos">
    <span>Html</span>
    <span>60%</span>
  </div>
 <div className="w-40 h-2 bg-#fde047 debug"></div>
 
 </div>
 <div >
  <div className="todos">
    <span>CSS</span><span>60%</span>
  </div>
 <div className="w-40 h-2 bg-#fde047 debug"></div>
 </div>
 <div >
  <div className="todos">
    <span>Java</span><span>85%</span>
  </div>
 <div className="w-60 h-2 bg-#fde047 debug"></div>
 </div>
 <div >
  <div className="todos">
    <span>Sprint</span><span>50%</span>
  </div>
 <div className="w-36 h-2 bg-#fde047 debug"></div>
 </div>
 <div >
  <div className="todos">
    <span>Js</span><span>50%</span>
  </div>
 <div className="w-36 h-2 bg-#fde047 debug"></div>
 </div>
  </section>
  <section className="debug">
<h3>Complementos</h3>
<div className="debug todos">
  <div>
      
  </div>
  <span>Lectura</span>

</div>
<div className="debug todos">
  <div></div>
  <span>Television</span>
</div>

  </section>
</aside>

      <main className="debug  w-[988px] h-full ">
        <section className="h-5/6">
                 <section className="debug todos2 flex  ">
                 <div className="flex-col w-3/4">
                  <div className="debug h-3/4 ">
                    <div>a</div>
                  <div>b</div>
                  <div>c</div>
                    <p>Parrafo</p>
                  </div>

                  
                  <div>Boton</div>
                 </div>
                 <div className="debug w-1/4 h-full">Foto</div>
                  
                  
                 </section>
                  <section className="debug  ">
                        <h3>Titulo</h3>
                        <p></p>
                        <div>
                          <div>Titulo1</div>
                          <div>Titulo2</div>
                          <div>Titulo3</div>
                        </div>

                  </section>
                  <section className="debug todos2 "></section>
                  <section className="debug todos2 "></section>
        </section>
        
       
        
        </main>
        <footer className="debug  w-24 ">
          
        </footer>
  </div>
  

        
}
export default Home;