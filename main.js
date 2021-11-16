var app = new Vue({
    el: '#app',
    data: {
      contacts: [
        { /* start contact */
          name: "Michele",
          avatar: "img/avatar_1.jpg",
          visible: "true",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            }
          ]
        },
        {
          name: "Fabio",
          avatar: "img/avatar_2.jpg",
          visible: "true",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            }
          ]
        },
        {
          name: "Samuele",
          avatar: "img/avatar_3.jpg",
          visible: "true",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            }
          ]
        },
        {
          name: "Luisa",
          avatar: "img/avatar_4.jpg",
          visible: "true",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a spasso il cane?",
              status: "sent",
            }
          ]
        },
      ]
    },
  });

  