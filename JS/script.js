const data = [
    {
        title: 'AFOXE',
        diagram: '/Images/Afoxe.PNG',
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Afoxe - Tune.mp3'
            },
            {
                title: 'Tune (with breaks',
                link: 'MP3/Afoxe - TuneWithBreaks.mp3'
            },
                ]
    },
    {
        title: 'DRUM & BASS',
        diagram: '/Images/Drum&Bass.PNG',   
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Drum&Bass - Tune.mp3'
            },
            {
                title: 'Tune (with breaks',
                link: 'MP3/Drum&Bass - TuneWithBreaks.mp3'
            },
                ]
    },
    {
        title: 'FUNK',
        diagram: '/Images/Funk.PNG',   
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Funk - Tune.mp3'
            },
            {
                title: 'Tune (with breaks',
                link: 'MP3/Funk - TuneWithBreaks.mp3'
            },
                ]
    },
]

console.log(data);

// const renderPage = (pageIndex)=>{

function renderPage(pageIndex) {
    // Set variable that grabs hold of the HTML element 'title'    
    const titleElement = document.getElementById('title')
    // Assign text content the 'title' element by getting the title from the data array
    titleElement.textContent = data[pageIndex].title

    // Set variable that grabs hold of the HTML element 'diagram'
    const diagramElement = document.getElementById('diagram')
    diagramElement.src = data[pageIndex].diagram
    diagramElement.alt = 'tuneSheet'

    // console.log(data.samples);
       
    const tuneRowElement = document.getElementById('tuneRow')
    tuneRowElement.innerHTML=''

    data[pageIndex].samples.forEach(
    (s)=>{
        // console.log(s) 
        const tuneElement = document.createElement('div')
        // tuneElement.innerHTML='<h3>'+s.title+'</h3><audio controls loop><source src="'+s.link+'" /></audio>'
        // tuneElement.innerHTML=`<h3>${s.title}</h3><audio controls loop><source src=${s.link}/></audio>`
        tuneElement.innerHTML = 

        `<h3>${s.title}</h3>
        <audio controls loop>
            <source src=${s.link} />
        </audio>`
        
        tuneElement.className = 'audio'
        tuneRow.appendChild(tuneElement)
    }
)
}



// }

renderPage(0)

data.forEach(
(p,tuneIndex)=>{

    console.log(tuneIndex);
    const tuneButtonElement = document.createElement('button')
    tuneButtonElement.textContent = p.title
    tuneButtonElement.addEventListener('click',()=>{renderPage(tuneIndex)})
    const tuneButtonContainer = document.getElementById('tuneButtonsRow')
    tuneButtonContainer.appendChild(tuneButtonElement)
    tuneButtonElement.classList.add('tuneButtons')
}    
)





// console.log(data.samples);


/*
function func1(greeting){
console.log("My greeting is")
}
*/

/*
const func2 = (params) => {
console.log(params);
}
*/


// func2('Hi!')
// func2('Bye!')


// const data = {
//     title: 'AFOXE',
//     diagram: '/Images/Afoxe.PNG',
//     samples: [
//         {
//         title: 'Main tune',
//             link: 'MP3/Afoxe - Tune.mp3'
//         },
//         {
//         title: 'Tune (with breaks',
//             link: 'MP3/Afoxe - TuneWithBreaks.mp3'
//         },
//     ]
// }


// console.log(data2[1].title);


