import React from "react";
import profileReducer, { addPostCreator, deletePost } from "./profile-reducer";

let state = {
  postsData: [
    { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
    { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
    { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
  ],
  profile: null,
  status: "",
};

it("new post should be added", () => {
  let action = addPostCreator("52 ngg");
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(4);
});

it("post 3 like = 83", () => {
  expect(state.postsData[2].like).toBe("83");
});

it("post should be deleted", () => {
  let action = deletePost(3);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
});
