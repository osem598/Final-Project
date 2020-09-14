import React from 'react'

function Main(props){
  let objectpf=[[[2,2,2],[2,8,2]],[[2,8,2],[2,8,8]],[[2,8,8],[2,2,8]],[[2,2,8],[2,2,2]],[[8,2,2],[8,8,2]],[[8,8,2],[8,8,8]],[[8,8,8],[8,2,8]],[[8,2,8],[8,2,2]],[[2,2,2],[8,2,2]],[[2,8,2],[8,8,2]],[[2,2,8],[8,2,8]],[[2,8,8],[8,8,8]]]
  // let objectpf=[[[60,60,10],[70,20,110]],[[60,60,10],[90,80,110]],[[60,60,10],[20,40,110]],[[60,60,10],[40,90,110]],[[70,20,110],[20,40,110]],[[20,40,110],[40,90,110]],[[40,90,110],[90,80,110]],[[90,80,110],[70,20,110]]]


  function scaler(scale){
    let scaledobject = []
    for (let usline in objectpf){
      let scaledline = []
      let unscaledline= objectpf[usline]
      for(let uspoint in unscaledline){
        let unscaledpoint = unscaledline[uspoint]
        let scaledpoint = [unscaledpoint[0]*scale,unscaledpoint[1]*scale,unscaledpoint[2]*scale]
        scaledline.push(scaledpoint)
      }
      scaledobject.push(scaledline);
    }
    objectpf = scaledobject;
  }


let objectpprocess=[];
let size=22;
scaler(2);
let fovPercentage= .9
let pMarker="X";
let lMarker="o";
let startline=[1,1,1]
let object=[]

for (let boint in objectpf){
  let tempfovline=[]
  let bline = objectpf[boint]

  for (let bpoint in bline){
    let b = bline[bpoint]
    let centerpvec= [0,((size-1)/2)+1,((size-1)/2)+1]
    let fovdistance = [0, centerpvec[1]-b[1], centerpvec[2]-b[2]]

    let fovP= ((b[0]/size)*fovPercentage)

    let fovDtimesfovP= [0, fovdistance[1]*fovP,fovdistance[2]*fovP]

    let postFovPoint = [b[0], Math.round(b[1]+fovDtimesfovP[1]), Math.round(b[2]+fovDtimesfovP[2])]

    tempfovline.push(postFovPoint)
  }
  object.push(tempfovline)

}


for (let line in object){
  // console.log(object[line])

  let bkmark=line;

  let cline = object[bkmark];

  let linep1 = cline[0];

  let linep2 = cline[1];

  let linep1pp=[linep1[0],linep1[1],linep1[2], pMarker]

  let linep2pp=[linep2[0],linep2[1],linep2[2], pMarker]

  objectpprocess.push(linep1pp)
  objectpprocess.push(linep2pp)

  let dvec= [linep1[0] - linep2[0], linep1[1]-linep2[1], linep1[2]- linep2[2]]

  let tInt= [dvec[0]!=0? 1/dvec[0]: 0, dvec[1]!=0? 1/dvec[1]: 0, dvec[2]!=0? 1/dvec[2]: 0]
  

  let numOftIntsvec=[tInt[0] === 0? 0 :1/Math.abs(tInt[0]),tInt[1] === 0? 0 :1/Math.abs(tInt[1]),tInt[2] === 0? 0 :1/Math.abs(tInt[2]),]

  // numOftInts = Math.max(...numOftIntsvec)

  let numOftInts= size



  for(let i = 1; i < numOftInts; i++){

    let t= -(Math.abs(i/numOftInts))

    let tD=[t*dvec[0],t*dvec[1],t*dvec[2]]

    let resultunrounded= [linep1[0]+tD[0],linep1[1]+tD[1],linep1[2]+tD[2]]

    let result=[ Math.round(resultunrounded[0]), Math.round(resultunrounded[1]), Math.round(resultunrounded[2])]

    let resultpp=[result[0], result[1], result[2], lMarker]

    objectpprocess.push(resultpp)

    // console.log(dvec)
    // console.log(tInt)
    console.log(tD)

  
  }
} 


let screenarr=[]
let objectdecimal= [];

for(let item in objectpprocess){
  let currentobjpppoint= objectpprocess[item]
  let objdecvalue = [((currentobjpppoint[2]-1)*size)+currentobjpppoint[1],currentobjpppoint[3]]

objectdecimal.push(objdecvalue)

}

for(let itwo=0; itwo<size**2;itwo++){
  let count= itwo+1
  // console.log(count)
  let screenpMarker= ' '
  for (let point in objectdecimal){
    let currentobjdecpoint= objectdecimal[point];

    if(currentobjdecpoint[0]=== count && currentobjdecpoint[1] === lMarker && screenpMarker != pMarker){
      screenpMarker= lMarker;
    }
    if(currentobjdecpoint[0]=== count && currentobjdecpoint[1] === pMarker){
      screenpMarker= pMarker;
    }
    if(screenpMarker != lMarker && screenpMarker != pMarker){
      screenpMarker=' '
    }
  }
screenarr.push(screenpMarker)

if(count % size === 0){
  screenarr.push('\n')
}
}

let screen = screenarr.join('')

console.log(screen)



  return(
    <div className="big-div">
    <div className="screen-display-box">{screen}</div>
    </div>
  )
}

export default Main