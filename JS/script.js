const data = [
    {
        title: 'HOME',
        text: 'Welcome to Brighton XR Samba learning and practice page. Here you can find tunesheets for all the tunes that we\'ve played together, along with MP3 files for individual instrument groups. Use the buttons above to launch the tunes.',
        diagram: 'Images/84122783_2701107426611824_7332157138808078336_o.jpg',
        samples: [
            {
                title: 'Star Wars extended',
                link: 'MP3/Special Breaks - Star Wars Extended.mp3'
            }
        ]
    },
    {
        title: 'AFOXE',
        text: 'Afoxê is “an Afro Brazilian genre of music”. The sign comes from the name sounding similar to "After-shave" (when pronounced with an English accent).',
        diagram: '/Images/Afoxe.PNG',
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Afoxe - Tune.mp3'
            },
            {
                title: 'Tune (with breaks)',
                link: 'MP3/Afoxe - TuneWithBreaks.mp3'
            },
            {
                title: 'Snare',
                link: 'MP3/Afoxe - Snare.mp3'
            },
            {
                title: 'Repi',
                link: 'MP3/Afoxe - Repi.mp3'
            }, 
            {
                title: 'Tambourim',
                link: 'MP3/Afoxe - Tam.mp3'
            },           
            {
                title: 'Agogo',
                link: 'MP3/Afoxe - Agogo.mp3'
            },
            {
                title: 'Mid surdo',
                link: 'MP3/Afoxe - MidSurdo.mp3'
            },
            {
                title: 'Low surdo',
                link: 'MP3/Afoxe - LowSurdo.mp3'
            },
            {
                title: 'High surdo',
                link: 'MP3/Afoxe - HighSurdo.mp3'
            },
                ]
    },
    {
        title: 'DRUM & BASS',        
        text: 'Sounds more like Hip-Hop than Drum ‘n’ Bass but has a really nice groove. Can be very cheerful when played quite fast or be groovy when played slow.', 
        diagram: '/Images/Drum&Bass.PNG',
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Drum&Bass - Tune.mp3'
            },
            {
                title: 'Tune (with breaks)',
                link: 'MP3/Drum&Bass - TuneWithBreaks.mp3'
            },
                ]
    },
    {
        title: 'FUNK',        
        text: 'This tune is one of the RoR basics. Although is the only tune called Funk, is not the only that sounds “funky”. There are two other, Karla Shnikov and Angela Davis. Just try to combine them, especially Funk-Angela Davis sounds great.',   
        diagram: '/Images/Funk.PNG', 
        samples: [
            {
                title: 'Main tune',
                link: 'MP3/Funk - Tune.mp3'
            },
            {
                title: 'Tune (with breaks)',
                link: 'MP3/Funk - TuneWithBreaks.mp3'
            },
                ]
    },
]

// console.log(data);


function renderPage(pageIndex) {

    const getHeaderElement = document.getElementById('pageHeader')
    getHeaderElement.innerText= data[pageIndex].title

    const getTextElement = document.getElementById('text')
    getTextElement.innerHTML = data[pageIndex].text

    const getImageElement = document.getElementById('image')
    getImageElement.src = data[pageIndex].diagram

    const mp3Container = document.getElementById('mp3Container')
    mp3Container.innerHTML = ''
    data[pageIndex].samples.forEach((element)=> {
    const mp3Element = document.createElement('div')
    mp3Element.innerHTML = `<h3>${element.title}</h3>
                            <audio controls loop class="mp3Element">                                
                                <source src=${element.link}>
                            </audio>`                                
    mp3Container.appendChild(mp3Element)
    mp3Element.className = 'mp3Element'
})

}

renderPage(0)



data.forEach((element,index)=> {
    if(index == false) {
        const homeButton = document.createElement('button')
        homeButton.textContent = element.title
        homeButton.addEventListener('click',()=>renderPage(index))
        const getNavElement = document.getElementById('navBar')
        getNavElement.appendChild(homeButton)
        homeButton.className = 'homeButton'
    } else {
        const tuneButton = document.createElement('button')
        tuneButton.textContent = element.title
        tuneButton.addEventListener('click',()=>renderPage(index))
        const getNavElement = document.getElementById('navBar')
        getNavElement.appendChild(tuneButton)
        tuneButton.className = 'tuneButton'
    }
})






// // Render all buttons together
// const buttons = data.forEach((element,index)=> {
//     const pageButton = document.createElement('button')
//     pageButton.textContent = element.title
//     pageButton.addEventListener('click',()=>renderPage(index))
//     const navElement = getElementById('navBar')
//     navElement.appendChild(pageButton)
//     pageButton.className = 'tuneButtons'
// })

