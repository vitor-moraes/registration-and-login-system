//
"use strict";

// Importing models
const User = use("App/Models/User");
const Database = use("Database");
const Drive = use("Drive");

// Functions
class UserController {
  // Registring new user
  async new({ request, response }) {
    let data = request.only(["name", "cpf", "email", "password"]);
    data["access"] = 1;
    const image = request.file("fileImage", {
      types: ["image"],
      size: "2mb",
    });
    if (image) {
      await image.move("../public/uploads/profile-image");
      if (!image.moved()) {
        return image.error();
      }
      data["img_path"] = "/uploads/profile-image/" + image.fileName;
    }
    const user = await User.creat(data);
    return response.status(201).json(user);
  }

  // Login user
  async login({ request, response, auth }) {
    const data = request.only(["email", "password"]); // Change to let login with e-mail or CPF
    const token = await auth.attempt(data.email, data.password);
    return response.json(token);
  }

  // Get all registrated users
  async getAll({ response }) {
    const resp = await User.all();
    return response.json(resp);
  }

  // Get a user information
  async get({ response, params }) {
    const resp = await User.find(params.id);
    return response.json(resp);
  }

  // Get a user information using e-mail
  async getByEmail({ response, params }) {
    const resp = await User.find(params.email);
    return response.json(resp);
  }

  // Deleting user
  async deleteUser({ params }) {
    User.delete(params.id);
  }

  // Changing user access
  async changeAccess({ request, params }) {
    const data = request.only(["access"]);
    const resp = Database.table("users").where("id", params.id).update(data);
    return resp;
  }

  // Editing a user information
  async edit({ request, response, params }) {
    let data = request.all();
    const image= request.file("fileImage", {
      types: ["image"],
      size: "2mb",
    });
    const oldFile = await User.find(params.id);
    const exists = await Drive.exists("../../public" + oldFile.img_path);
    if(image) {
      if(exists) {
        await Drive.delete("../../public" + oldFile.img_path);
      }
      await image.move("../public/uploads/profile-image/");
      if(!image.moved()) {
        retunr image.error();
      }
      data["img_path"] = "/uploads/profile-image" + image.fileName;
    }
    const resp = await Database.table("users")
    .where("id",params.id)
    .update(data);
    return response.json(resp);
  }
}

module.exports = UserController;
