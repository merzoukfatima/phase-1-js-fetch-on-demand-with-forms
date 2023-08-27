const init = () => {
  const form=document.querySelector("form")
  form.addEventListener("submit",(event)=>{
    event.preventDefault()
  const input=document.querySelector("#searchByID")
  fetch(`http://localhost:3000/movies/${input.value}`).then(rspn => rspn.json()).then(data => {
    console.log(data);
    const titleHeading=document.querySelector("#movieDetails h4")  
    const summaryParagraph=document.querySelector("#movieDetails p")  
    titleHeading.textContent=data.title
    summaryParagraph.textContent=data.summary
})
 
  })
}

document.addEventListener('DOMContentLoaded', init);