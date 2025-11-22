import { Router } from "express";
import User from "./mongooseModel.mjs";
import Otp from "./otp.mjs";
import generate from "./generateotp.mjs";
import { sendMail } from "./sendmail.mjs";
import bcrypt, { compare } from "bcrypt";

const router = Router();

router.post("/user/signup", async (req, res) => {
  let { name, email } = req.body;
  email = email.toLowerCase();

  try {
    const exstinguser = await User.findOne({ email });
    if (exstinguser) {
      return res.status(404).json("account already created");
    }

    const otp = generate();

    const hashedotp = await bcrypt.hash(otp.toString(), 10);

    await Otp.create({
      email,
      otp: hashedotp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });
    await sendMail(process.env.MY_USER, email, `your otp ${otp}`);
    console.log(Otp);

    res.status(200).json("Otp successfuly send");
  } catch (error) {
    res.status(400).json("server error");
  }
});

router.post("/user/verify", async (req, res) => {
  const { otp, name, password } = req.body;
  let email = req.body.email.toLowerCase();
  try {
    const validuser = await Otp.findOne({ email });

    if (!validuser) {
      return res.status(404).json("email not found");
    }
    const ismatch = await compare(otp.toString(), validuser.otp);
    if (!ismatch) {
      return res.status(404).json("wrong otp");
    }
    const hashedpassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedpassword,
      isverified: true,
    });

    await Otp.deleteOne({ email });
    res.status(200).json("user created welcome");
  } catch (error) {
    console.error("Error in verify:", error);
    res.status(500).json("server crash");
  }
});

router.post("/user/login", async (req, res) => {
  const { name, password } = req.body;
  let email = req.body.email.toLowerCase();

  try {
    const loginuser = await User.findOne({ email });

    if (loginuser.name !== name.toString()) {
      return res.status(404).json("username incorrect");
    }

    if (!loginuser.email) {
      return res.status(404).json("email incorrect");
    }

    const loginuserpassword = await bcrypt.compare(
      password,
      loginuser.password
    );

    if (!loginuserpassword) {
      return res.status(404).json("password incorrect");
    }

    req.session.user = {
      id: loginuser._id,
      name: loginuser.name,
      email: loginuser.email,
    };

    res.status(200).json({
      success: true,
      message: "Successfully Logged In",
    });
  } catch (error) {
    res.status(500).json("server crash");
  }
});

export default router;
