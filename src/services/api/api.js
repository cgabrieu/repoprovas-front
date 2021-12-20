/* eslint-disable no-param-reassign */
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

export function getTeachersByCourse(courseId) {
  return api.get(`/teachers?courseId=${courseId}`);
}

export function getTeachersByClass(classId) {
  return api.get(`/teachers?classId=${classId}`);
}

export function postTeacher(name, courseId, classId) {
  return api.post("/teachers", {
    name,
    courseId: [courseId],
    classId: [classId]
  });
}

export function postPreSignedPutUrl(body) {
  return api.post("/contribute/upload", body);
}

export function putUploadToAws(url, body) {
  return api.put(url, body);
}

export function postTest(body) {
  delete body.courseId;
  delete body.names;
  return api.post("/tests", body);
}