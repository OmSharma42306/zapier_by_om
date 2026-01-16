import rateLimit from "express-rate-limit";

export const globalRateLimiter = rateLimit({
    windowMs : 15*60*1000, // 15 Minutes
    max : 300, // per Ip
    standardHeaders : true,
    legacyHeaders : false,
    message : {msg : "Too Many Requests!, please try again Later."},
});

export const authRateLimiter = rateLimit({
    windowMs : 10*60*1000 ,// 10 minutes,
    max : 10, // per Ip
    standardHeaders : true,
    legacyHeaders : false,
    message: { msg: "Too many login attempts. Try again later." },
})