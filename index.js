let btn = document.getElementById('submit-btn')

btn.addEventListener('click', function(){
    let yearInput = document.getElementById('year-input')
    let yearText = yearInput.value
    let birthYear = parseInt(yearText)

    let d = new Date()
    let currentYear = d.getFullYear()

    let birthYearLength = birthYear + ''

    if(birthYearLength.length > 3){
        var result = currentYear - birthYear

        let show = document.getElementById('show-result')
        let showCard = document.getElementById('show-card')

        showCard.style.display = 'block'
        if(result >= 18){
            show.innerHTML = `<h5  class="text-center">You are ${result} years old.</h5><h5  class="text-center">And you are an adult.</h5>`
        } else {
            show.innerHTML = `<h5  class="text-center">You are ${result} years old.</h5  class="text-center"><h5>And you are not child yet.</h5>`
        }
        show.className = 'show-style'
    }

})