const form=document.getElementById("form");
const submit=document.getElementById("submit");
function submitform(){
    form.submit();

}
submit.addEventListener("click" , (e)=>{
    console.log(e);
    submitform();

})
