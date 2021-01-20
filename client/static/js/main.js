(() => {
  const app = {
    initialize() {

      this.tinderApi = new TinderApi();

      this.users = null


      this.cacheElements();
      this.fetchUsers();
      this.fetchMessages();
    },

    cacheElements() {
      this.$usersList = document.querySelector('.users__list');
      this.$messagesList = document.querySelector('.messages__list');
      this.$inbox = document.querySelector('.inbox');
      this.$outbox = document.querySelector('.outbox');
      this.$conversation = document.querySelector('.conversation');
      this.$conversationTop = document.querySelector('.conversation-top');
      this.$conversationBottom = document.querySelector('.conversation-bottom');
      this.$matchMaker = document.querySelector('.match-maker');
      this.$matchesFalse = document.querySelector('.matches-false');
      this.$matchesTrue = document.querySelector('.matches-true');
    },

    async fetchUsers() {
      this.users = await this.tinderApi.getUsers();
      this.$usersList.innerHTML = this.users.map(c => `
        <li class="users__list-item">
          <a href="#"><span>${c.username}</span></a>
        </li>
      
      `).join('');
    },

    async fetchMessages() {
      this.messages = await this.tinderApi.getSentMessagesFromUser();
      this.$inbox.innerHTML = this.messages.map(c => `
        <li>
          <a href="#"><span>${c.message}</span></a>
        </li>

      `)

      console.log(this.messages);
    },

  }
  app.initialize();
})();