const { createApp } = Vue;
createApp({
    data(){
        return{
            mail : '',
            mails : [],
        };
    },
    methods : {
        generateMails(){
            this.mails = [];
            for(let i = 0; i <= 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                   
                   this.mail = response.data.response;
                   this.mails.push(this.mail);
                   console.log(this.mails[i]);
            });
            
            }
            
        },
    },
    mounted(){
        this.generateMails();
    }
}).mount("#app");
