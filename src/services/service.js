import http from '../http-common'

class dataService {
  getAll() {
    return http.get("/characters");
  }

  get(id) {
    return http.get(`/characters/${id}`);
  }

  create(data) {
    return http.post("/characters", data);
  }

  update(id, data) {
    return http.put(`/characters/${id}`, data);
  }

  delete(id) {
    return http.delete(`/characters/${id}`);
  }

  deleteAll() {
    return http.delete(`/characters`);
  }

  findByTitle(title) {
    return http.get(`/characters?title=${title}`);
  }
}

export default new dataService();
