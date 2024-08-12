axios.get('http://localhost:3000/user-info')
.then((res)=>{
    console.log(res.data)
    $('.photoCon').append(
        `<img class="userPhoto" src="${res.data.user.avatar_url}" alt="">`
    )

    for(let el of res.data.repos){
        if(el.description){
            if(el.description.includes('portfolio')){
                console.log(el)
                $('.reposCon').append(
                    `
                    <div class="repo">
                    <div class="repoName">${el.name}</div>
                    <div class="repoDes">${el.description}</div>
                    <div class="buttons">
                    <a href="${el.html_url}" target="_blank"><div class="button" id='OpenPage'>Open repo</div></a>
                    <a href="${el.html_url}" target="_blank"><div class="button" id='OpenPage'>Open project</div></a>
                    </div>
                    </div>
                    `
                )
            }
        }
    }
})

//heading script
new TypeIt("#testText", {
    speed: 50,
    startDelay: 1500,
  })
    .type("ello, I", { delay: 100 })
    .move(-7, { delay: 100 })
    .type("h", { delay: 400 })
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("H", { delay: 225 })
    .pause(200)
    .move(2, { instant: true })
    .pause(200)
    .move(5, { instant: true })
    .type("'", { delay: 350 })
    .type("m Yana Zubal")
    .delete(10)
    .type('<em><strong class="font-semibold">Yana Zubal.</strong></em>', {
      speed: 100,
    })
    .delete(1)
    .type('!', { delay: 300 })
    .go();