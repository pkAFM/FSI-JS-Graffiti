let header = document.querySelector('#page-header')
header.style.textAlign = "left"
header.style.backgroundColor = "#A19FBC"
header.style.color = "#1C11B6"




let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '10px'
	dogImages[i].style.transform = 'rotate(180deg)'
}

let footer = document.querySelector('.footer')
footer.style.backgroundColor = "#A19FBC"
footer.style.borderStyle = 'solid'

let description = document.querySelectorAll('.dog-description')
for(let i = 0; i < description.length; i++) {
description[i].style.color = '#A978A9'
}

let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
	dogNames[i].style.textAlign = 'left'
	dogNames[i].style.color = '#1C11B6'
}



// Select some elements...