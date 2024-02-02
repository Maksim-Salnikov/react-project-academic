import axios from "axios";

const instans = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "9010a2eb-dfec-44b6-a12f-5edd7c6a50a7",
  },
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  postFollow(id) {
    return instans.post(`follow/` + id).then((response) => {
      return response.data;
    });
  },
  deleteFollow(id) {
    return instans.delete(`follow/` + id).then((response) => {
      return response.data;
    });
  },
};

export const ProfileAPI = {
  getProfile(userId) {
    return instans.get(`profile/` + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instans.get(`/profile/status/` + userId).then((response) => {
      return response.data;
    });
  },
  updateStatus(status) {
    return instans
      .put(`/profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
};

export const HeaderAPI = {
  getProfile(id) {
    return instans.get(`profile/` + id).then((response) => {
      return response.data;
    });
  },
};

export const AuthAPI = {
  getAuthMe() {
    return instans.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe) {
    return instans
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instans.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};
