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
              text: "Hai portato a spasso il cane?...",
              status: "recive",
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
              text: "Come va?...",
              status: "sent",
            },
            {
              date: "10/01/2020 15:30:55",
              text: "Tutto beneee?...",
              status: "recive",
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
              text: "Ciaooo usciamo sta sera?...",
              status: "sent",
            }
          ]
        },
        {
          name: "Luisa",
          avatar: "img/avatar_io.jpg",
          visible: "true",
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai fatto la spesa?...",
              status: "recive",
            }
          ]
        },
      ],
      activeContact: 0,
    },
    methods: {
      activeNow(index) {
        this.activeContact = index;
      },
    }
  });

  