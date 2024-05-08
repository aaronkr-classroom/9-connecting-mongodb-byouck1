// seed.js
"use strict";

/**
 * Listing 15.9 (p. 224)
 * 새로운 데이터 생성
 */
// 모듈 가져오기
const mongoose=require("mongoose"),
  subscriber=require("./models/subscriber");

// 데이터베이스 연결 설정
mongoose.connect(
  "mongodb+srv://ut-node:Alz9Dwy9ghE4wiLw@ut-node.ny8ugbl.mongodb.net/?retryWrites=true&w=majority&appName=UT-NODE",
  {useNewUrlParser: true}
);

mongoose.connection;

// subscribers 배열 생성 (5개 이상)
var subscribers = [
  {
    name: "a",
    email: "a@naver.com",
    phoneNumber: "1",
  },
  {
    name: "b",
    email: "b@naver.com",
    phoneNumber: "2",
  },
  {
    name: "c",
    email: "c@naver.com",
    phoneNumber: "3",
  },
  {
    name: "d",
    email: "d@naver.com",
    phoneNumber: "4",
  },
  {
    name: "e",
    email: "e@naver.com",
    phoneNumber: "5",
  },
  {
    name: "f",
    email: "f@naver.com",
    phoneNumber: "6",
  },
  {
    name: "g",
    email: "g@naver.com",
    phoneNumber: "7",
  },
];

// 기존 데이터 제거
subscriber.deleteMany()
  .exec() //
  .then(()=> {
    console.log("Subscribers deleted!");
  });


var commands = [];

// 프라미스 생성을 위한 구독자 객체 루프
subscribers.forEach(s=> {
  commands.push(
    subscriber.create({
      name:s.name,
      email:s.email,
      phoneNumber:s.phoneNumber
    })
  );
});

// 프라미스 생성 후 로깅 작업

Promoise.all(commands)
  .then(r=> {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(e=> {
    console.log(`Error: %{e}`);
  });