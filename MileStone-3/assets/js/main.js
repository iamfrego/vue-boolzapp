var app = new Vue({
    el: '#app',
    data: {
        activeContact: 0,

        messageText: "",

        newMessage: {
            date: '',
            text: '',
            status: 'sent'
        },

        newMessageReceived: {
            date: '',
            text: '',
            status: 'received'
        },

        contacts: [
            {
                name: 'Michele',
                avatar: './assets/img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Samuele',
                avatar: './assets/img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: './assets/img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        showChat(i) {
            console.log("prova");
            this.activeContact = i;
        },
        addMessage() {
            let nowTime = dayjs().format('DD/MM/YYYY H:mm');
            this.newMessage.date = nowTime;
            this.newMessage.text = this.messageText;
            this.contacts[this.activeContact].messages.push(this.newMessage);
            this.messageText = ""
            console.log(this.contacts[this.activeContact].messages);

            setTimeout(function () {
                app.newMessageReceived.date = nowTime;
                app.newMessageReceived.text = "Ok";
                app.contacts[app.activeContact].messages.push(app.newMessageReceived)
            }, 1000)
        }
    }

})