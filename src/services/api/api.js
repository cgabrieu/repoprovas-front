import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === "prod"
      ? "https://repoprovas-cgabrieu.herokuapp.com"
      : "http://localhost:4000",
});


export function getCourses() {
  return api.get("/courses");
}

export function postCourse(name) {
  return api.post("/courses", {
    name,
  });
}

export function getClassesByCourse(courseId) {
  return api.get(`/classes?courseId=${courseId}`);
}

export function postClasse(name, period, courseId) {
  return api.post("/classes", {
    name,
    period,
    courseId: [courseId]
  });
}