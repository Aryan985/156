AFRAME.registerComponent("collision",{
    schema:{
        id:{type:"string",default:"#ring1"}
    },
    init:function(){
        var duration=120
        var timer=document.querySelector("#timer")
        this.starttimer(duration,timer)

    },

    // 120/60 = 2 min
    // 120%60 = 0 sec
    starttimer:function(duration,timer){
        var min,sec
        setInterval(() => {
            if(duration>0){
                min=parseInt(duration/60)
                sec=parseInt(duration%60)
                if(min<10){
                    min="0"+min
                }
                if(sec<10){
                    sec="0"+sec
                }
               timer.setAttribute("text",{value:min+":"+sec}) 
               duration-=1
            }else{
                this.gameover()
            }
        }, 1000);
    },

    update:function(){
        this.collided(this.data.id)
    },

    updatetarget:function(){
        var tar=document.querySelector("#count")
        var count=tar.getAttribute("text").value
        var int=parseInt(count)
        int-=1
        tar.setAttribute("text",{value:int}) 
    },
    updatescore:function(){
        var tar=document.querySelector("#score")
        var score=tar.getAttribute("text").value
        var int=parseInt(score)
        int+=5
        tar.setAttribute("text",{value:int}) 
    },
    collided:function(id){
        var element=document.querySelector(id)
        element.addEventListener("collide",e=>{
       element.setAttribute("visible",false)
       this.updatetarget()
       this.updatescore()
        })
    },
gameover:function(){
   var over=document.querySelector("#over")
   over.setAttribute("visible",true)
   var plane=document.querySelector("#plane_model")
   plane.setAttribute("dynamic-body",{mass:1})
  
  
}
})