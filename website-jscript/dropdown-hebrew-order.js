function handleSubmit() {
    if  (document.directing.cellphone.value.length != 10 || isNaN(document.directing.cellphone.value)) { // שונה מ10 
        alert("מספר פלאפון לא תקין");
        document.directing.cellphone.value = "";
                    
        return(false);
    }
           
    if  (document.directing.first_name.value.length < 2 || !isNaN(document.directing.first_name.value)) { // קטן מ2              
        alert("שם פרטי לא תקין");
        document.directing.first_name.value = "";
                    
        return(false);
    }
        
    if  (document.directing.family_name.value.length < 2 || !isNaN(document.directing.family_name.value)) { // קטן מ2 
        alert("שם משפחה לא תקין");
        document.directing.family_name.value = "";
                    
        return (false);
    }
                
    document.directing.action = 
                    "https://rtfs0620.xyz/form"          + "-" + 
                    document.directing.cellphone.value   + "-" +
                    document.directing.family_name.value + "-" +
                    document.directing.first_name.value  ;    
                
                    return (true);             
}