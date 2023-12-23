let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
        { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
        { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Andrew",
          avatar:
            "https://sun9-61.userapi.com/c206524/v206524740/2d433/FKffvmwVZeA.jpg",
        },
        {
          id: 2,
          name: "Dmitry",
          avatar:
            "https://sun9-19.userapi.com/impg/Z0lGOuMi5OSo70IGbXCQcWwU22LG39_NGrSbIg/YJTuDQ-NFFw.jpg?size=604x453&quality=95&sign=ce6ee4431e79310864ac79baaac2fa2a&c_uniq_tag=cEBITtl7H_dhxdjIxpHdgOP-zn3fcjE7kLcnGal_ypE&type=album",
        },
        {
          id: 3,
          name: "Sasha",
          avatar: "https://99px.ru/sstorage/41/2011/01/12501111454544969.jpg",
        },
        {
          id: 4,
          name: "Sveta",
          avatar:
            "https://avatars.dzeninfra.ru/get-zen_doc/3855260/pub_5f59f098d7ccef142bc5bd7d_5f59f22e55f5fd69c0f9cfe3/scale_1200",
        },
        {
          id: 5,
          name: "Valera",
          avatar:
            "https://sun9-4.userapi.com/impg/I9cfcHEWYTld7xk_I1boAB3ezXmryAUd8CS5xg/WY1yh_8V9Ng.jpg?size=363x604&quality=96&sign=2e4a36a828892ada34ae7455d794c9a9&type=album",
        },
        {
          id: 6,
          name: "Viktor",
          avatar:
            "https://sun9-67.userapi.com/impg/c858416/v858416035/214903/Y4ldK9MEhyI.jpg?size=435x604&quality=96&sign=304fcf267cb3596a9769184628c5f001&type=album",
        },
      ],
      messagesData: [
        { id: 1, textMessage: "Привет, как дела?" },
        { id: 2, textMessage: "Все путем, у тебя как?" },
        { id: 3, textMessage: "Тоже нормалдос, пойедшь пить пиво?" },
        { id: 4, textMessage: "Да, конечно поеду пить пиво)" },
        { id: 5, textMessage: "Тогда в 52 у меня хд хд хд" },
      ],
      newMessageText: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State updated");
  },
  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      like: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 6,
      textMessage: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
