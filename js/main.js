//Example fetch using DnD5eAPI - place subclasses in ul

const BREEDS_URL = 'https://www.dnd5eapi.co/api/spells' 
fetch(BREEDS_URL)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data.results)
      data.results.forEach( obj =>{
        // console.log(obj.index)
        const option = document.createElement('option')
        option.value = obj.index
        option.innerText = obj.index
        document.querySelector('.selectspell').appendChild(option) 
      })
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('.selectspell').value
  console.log(choice)
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      //   console.log(data.subclasses[0].name)
      //   console.log(data.subclasses[1].name)
        document.querySelector('.spellName').innerText=data.name
        // document.querySelector('.classname').innerText=data.classes[0].name

        let ul1=document.querySelector('.className')
        ul1.innerHTML = ''
        data.classes.forEach( obj => {
            console.log(`classes: ${obj.name}`)
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.name
            //append the li to the ul
            ul1.appendChild(li)
        })

        let ul2=document.querySelector('.subclassName')
        ul2.innerHTML = ''
        data.subclasses.forEach( obj => {
            
            console.log(`subclasses: ${obj.name}`)
            //create an li
            const li = document.createElement('li')
            //add text to li
            li.textContent = obj.name
            //append the li to the ul
            ul2.appendChild(li)
        })

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

