const myButton = document.getElementById("new");
const info = document.getElementById("requestinfo");

info.style.display="none";

fetch('codingclub.json').then(response => response.json()).then(data =>{
    const base=data.data;
    function timeconvert(t){
        const [time, AP] = t.split(" ");
        let [h,min] = time.split(":");
        h=parseInt(h,10);

        if(AP === "PM" && h !== 12){
            h += 12;
        }
        else if(AP === "AM" && h === 12){
            h =0;
        }

        const hr = h.toString().padStart(2,"0");
        const minute = min.padStart(2,"0");

        return `${hr}:${minute}`;
    }
    base.forEach(person=>{

        const parent = document.getElementById('rowhead');

        const newdate = document.createElement('div');
        newdate.id='newdata';
        newdate.textContent=person.date;
        parent.appendChild(newdate);

        const newtime = document.createElement('div');
        newtime.id='newdata';
        const Time24 = timeconvert(person.time);
        newtime.textContent=Time24;
        parent.appendChild(newtime);

        const newname= document.createElement('div');
        newname.id='newdata';
        newname.textContent=person.name;
        parent.appendChild(newname);

        const newdestination = document.createElement('div');
        newdestination.id='newdata';
        newdestination.textContent=person.destination;
        parent.appendChild(newdestination);

        const newhostel = document.createElement('div');
        newhostel.id='newdata';
        newhostel.textContent=person.hostel;
        parent.appendChild(newhostel);

        const newmn = document.createElement('div');
        newmn.id='newdata';
        newmn.textContent=person.mobileNumber;
        parent.appendChild(newmn);

        const newdelete = document.createElement('button');
        newdelete.id='share';
        newdelete.textContent='share';
        parent.appendChild(newdelete);

    })       
    

})


myButton.addEventListener("click",event =>{
    
    if(info.style.display === "none"){
        info.style.display="block";
    }
    else{
        info.style.display="none";
    }

});

const myButton1 = document.getElementById("filter");
const info1 = document.getElementById("filterinfo");
const infof = document.getElementById("filterhead");
info1.style.display="none";
infof.style.display="none";

myButton1.addEventListener("click",event =>{
    
    if(info1.style.display === "none"){
        info1.style.display="block";
    }
    else{
        info1.style.display="none";
    }

});
function add(arr){
    fetch('codingclub.json').then(response => response.json()).then(data =>{
        const base=data.data;
        base.push(arr[0]);
        
    })

}

function ffilter(destination,time,date){
    
    fetch('codingclub.json').then(response => response.json()).then(data =>{
        const base=data.data;
        const result = base.filter(person => person.destination === destination && person.date === date ).map(person => ({ name: person.name, date: person.date,destination: person.destination, time: person.time,hostel: person.hostel,mobileNumber: person.mobileNumber }));
      
        result.forEach(person=>{

            const parent = document.getElementById('filterhead');

            const newdate = document.createElement('div');
            newdate.id='newdata';
            newdate.textContent=person.date;
            parent.appendChild(newdate);

            const newtime = document.createElement('div');
            newtime.id='newdata';
            newtime.textContent=person.time;
            parent.appendChild(newtime);

            const newname= document.createElement('div');
            newname.id='newdata';
            newname.textContent=person.name;
            parent.appendChild(newname);

            const newdestination = document.createElement('div');
            newdestination.id='newdata';
            newdestination.textContent=person.destination;
            parent.appendChild(newdestination);

            const newhostel = document.createElement('div');
            newhostel.id='newdata';
            newhostel.textContent=person.hostel;
            parent.appendChild(newhostel);

            const newmn = document.createElement('div');
            newmn.id='newdata';
            newmn.textContent=person.mobileNumber;
            parent.appendChild(newmn);

            const newdelete = document.createElement('button');
            newdelete.id='share';
            newdelete.textContent='share';
            parent.appendChild(newdelete);

        })       
        
    
    })
}


    
    
    
    let destinationf,datef,timef;
    document.getElementById("submitf").onclick = function(){
        destinationf=document.getElementById("Destinationf").value;
        datef=document.getElementById("Datef").value;
        timef=document.getElementById("Timef").value;
        info1.style.display="none";
        infof.style.display="grid";
        ffilter(destinationf,timef,datef);
        
        
    }

    
    let Name,destination,date,Time,Hostel,No,i=13;
    document.getElementById("submit").onclick = function(){
            Name=document.getElementById("Name").value;
            destination=document.getElementById("Destination").value;
            date=document.getElementById("Date").value;
            Time=document.getElementById("Time").value;
            Hostel=document.getElementById("Hostel").value;
            No=document.getElementById("Pno").value;
            info.style.display="none";
            
            ++i;
        const newRide = [
            {
                id : i,
                name : Name,
                destination : destination,
                date : date,
                time : Time,
                hostel : Hostel,
                mobileNumber : No
            }
        ];
        add(newRide);

        const newdate = document.createElement('div');
        const parent = document.getElementById('rowhead');
        newdate.id='newdata';
        newdate.textContent=date;
        parent.appendChild(newdate);

        const newtime = document.createElement('div');
        newtime.id='newdata';
        newdate.className='time_c';
        newtime.textContent=Time;
        parent.appendChild(newtime);

        const newname = document.createElement('div');
        newname.id='newdata';
        newdate.className='name_c';
        newname.textContent=Name;
        parent.appendChild(newname);

        const newDesti = document.createElement('div');
        newDesti.id='newdata';
        newdate.className='desti_c';
        newDesti.textContent=destination;
        parent.appendChild(newDesti);

        const newHostel = document.createElement('div');
        newHostel.id='newdata';
        newdate.className='hostel_c';
        newHostel.textContent=Hostel;
        parent.appendChild(newHostel);

        const newcn = document.createElement('div');
        newcn.id='newdata';
        newdate.className='cn_c';
        newcn.textContent=No;
        parent.appendChild(newcn);

        const newdelete = document.createElement('button');
        newdelete.id='share';
        newdelete.textContent='share';
        parent.appendChild(newdelete);

        Name=" ";
    };




