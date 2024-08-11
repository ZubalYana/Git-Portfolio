axios.get('http://localhost:3000/user-info')
.then((res)=>{
    console.log(res.data)
    $('.photoCon').append(
        `<img class="userPhoto" src="${res.data.user.avatar_url}" alt="">`
    )
    $('.PortfolioText').text(`Portfolio ${res.data.user.login}`)

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
                    <a href="${el.html_url}"><div class="button" id='OpenPage'>Open repo</div></a>
                    </div>
                    </div>
                    `
                )
            }
        }
    }
})