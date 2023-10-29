const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userController = require("./controllers/UserController");
const doctorController = require("./controllers/DoctorController");
const commentController = require("./controllers/CommentController");
const appointmentController = require("./controllers/AppointmentController");
const medicalhistoryController = require("./controllers/MedicalHistoryController");

const mongoose = require("mongoose");
const uri = 'mongodb+srv://medical_admin:5UUxV5uwNHp4n3Pm@cluster0.wt5joqu.mongodb.net/';
const dbName = 'ProyectoDASW'; 

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', () => {
    console.log('Conectado a la base de datos:', dbName);
  });


const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app
    .route("/User")
    .get(userController.listAllUsers)
    .post(userController.createNewUser)
    .put(userController.editUser)
    .delete(userController.deleteUser)
    .get(userController.getUserById);

app
    .route("/Doctor")
    .get(doctorController.listAllDoctors)
    .post(doctorController.createNewDoctor)
    .put(doctorController.editDoctor)
    .delete(doctorController.deleteDoctor)
    .get(doctorController.getDoctorById);

app
    .route("/Comment")
    .get(commentController.listAllComments)
    .post(commentController.createNewComment)
    .put(commentController.editComment)
    .delete(commentController.deleteComment)
    .get(commentController.getCommentById);

app
    .route("/Appointment")
    .get(appointmentController.listAllAppointments)
    .post(appointmentController.createNewAppointment)
    .put(appointmentController.editAppointment)
    .delete(appointmentController.deleteAppointment)
    .get(appointmentController.getAppointmentById);
app
    .route("/MedicalHistory")
    .get(medicalhistoryController.listAllMedicalHistories)
    .post(medicalhistoryController.createNewMedicalHistory)
    .put(medicalhistoryController.editMedicalHistory)
    .delete(medicalhistoryController.deleteMedicalHistory)
    .get(medicalhistoryController.getMedicalHistoryById);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});